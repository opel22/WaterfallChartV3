define("pp_viz_ext_watefallchartv3-src/js/render", [], function() {
	/*
	 * This function is a drawing function; you should put all your drawing logic in it.
	 * it's called in moduleFunc.prototype.render
	 * @param {Object} data - proceessed dataset, check dataMapping.js
	 * @param {Object} container - the target d3.selection element of plot area
	 * @example
	 *   container size:     this.width() or this.height()
	 *   chart properties:   this.properties()
	 *   dimensions info:    data.meta.dimensions()
	 *   measures info:      data.meta.measures()
	 */
	var render = function(data, container) {
		// TODO: add your own visualization implementation code below ...
		var properties = this.properties();

	var gridlineVisible = properties.gridline && properties.gridline.visible;

	//var animationDataLoading = properties.animation && properties.animation.dataLoading;
	
	var class_neg = "waterfall_negative";
	var class_pos = "waterfall_positive";
	
	if (gridlineVisible === true) {
	    class_neg = "waterfall_positive";
	    class_pos = "waterfall_negative";
	}

		function dollarFormatter(n) {
			n = Math.round(n);
			var result = n;
			if (Math.abs(n) > 1000) {
				result = Math.round(n / 1000) + "K";
			}
			return result;
		}

		var margin = {
				top: 20,
				right: 30,
				bottom: 30,
				left: 40
			},
			width = this.width() - margin.left - margin.right,
			height = this.height() - margin.top - margin.bottom,
			padding = 0.3;

		var x = d3.scale.ordinal()
			.rangeRoundBands([0, width], padding);

		var y = d3.scale.linear()
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.tickFormat(function(d) {
				return dollarFormatter(d);
			});

		//var chart = d3.select(".chart")
		container.selectAll('g').remove();
		var chart = container
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var meaSetStart = data.meta.measures("Start Measure");
		var mStart = meaSetStart[0];

		var meaSetEnd = data.meta.measures("End Measure");
		var mEnd = meaSetEnd[0];

		var meaSetDiff = data.meta.measures("Deviation");
		var mDiff = meaSetDiff[0];

		data.forEach(function(d) {
			d[mStart] = +d[mStart];
			d[mEnd] = +d[mEnd];
			d[mDiff] = +d[mDiff];
		});

		var sumStart = d3.sum(data, function(d) {
			return d[mStart];
		});
		var sumEnd = d3.sum(data, function(d) {
			return d[mEnd];
		});
		
		var sumDiff = d3.sum(data, function(d){
		    return d[mDiff];
		});

        if (sumDiff < 0 && sumStart < sumEnd){
    		for (var i = 0; i < data.length; i++) {
    			data[i].Diff = (data[i].Diff * (-1));
    		}
        }

		var cumulative = sumStart;
		for (i = 0; i < data.length; i++) {
			data[i].start = cumulative;
			cumulative += data[i].Diff;
			data[i].end = cumulative;

			data[i].class = (data[i].Diff >= 0) ? class_pos : class_neg;
		}

		//Start-"Objekt" hinzufügen
		data.unshift({
			"Kostenart": mStart,
			"Plan": 0,
			"Ist": 0,
			"Diff": 0,
			"start": 0,
			"end": sumStart,
			"class": "waterfall_start"
		});
		//End-"Objekt" hinzufügen
		data.push({
			"Kostenart": mEnd,
			"Plan": 0,
			"Ist": 0,
			"Diff": 0,
			"start": 0,
			"end": sumEnd,
			"class": "waterfall_total"
		});

		//	alert(JSON.stringify(bar, null, 4));

		x.domain(data.map(function(d) {
			return d.Kostenart;
		}));
		y.domain([0, d3.max(data, function(d) {
			return d.end;
		})]);

		chart.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		chart.append("g")
			.attr("class", "y axis")
			.call(yAxis);

		var bar = chart.selectAll(".bar")
			.data(data)
			.enter().append("g")
			.attr("class", function(d) {
				return "waterfall_bar " + d.class;
			})
			.attr("transform", function(d) {
				return "translate(" + x(d.Kostenart) + ",0)";
			});

		bar.append("rect")
			.attr("y", function(d) {
				return y(Math.max(d.start, d.end));
			})
			.attr("height", function(d) {
				return Math.abs(y(d.start) - y(d.end));
			})
			.attr("width", x.rangeBand());

		bar.append("text")
			.attr("x", x.rangeBand() / 2)
			.attr("y", function(d) {
				return y(d.end) + 5;
			})
			.attr("dy", function(d) {
				return ((d.class === class_neg) ? '-' : '') + ".75em";
			})
			.text(function(d) {
				return dollarFormatter(d.end - d.start);
			});

		bar.filter(function(d) {
			return d.class !== "waterfall_total";
		}).append("line")
			.attr("class", "connector")
			.attr("x1", x.rangeBand() + 5)
			.attr("y1", function(d) {
				return y(d.end);
			})
			.attr("x2", x.rangeBand() / (1 - padding) - 5)
			.attr("y2", function(d) {
				return y(d.end);
			});

	};

	return render;
});