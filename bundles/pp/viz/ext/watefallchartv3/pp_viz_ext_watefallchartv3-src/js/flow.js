define("pp_viz_ext_watefallchartv3-src/js/flow", ["pp_viz_ext_watefallchartv3-src/js/module"], function(moduleFunc) {
	var flowRegisterFunc = function() {
		var flow = sap.viz.extapi.Flow.createFlow({
			id: "pp.viz.ext.watefallchartv3",
			name: "Waterfall Chart v3",
			dataModel: "sap.viz.api.data.CrosstableDataset",
			type: "BorderSVGFlow"
		});

		var titleElement = sap.viz.extapi.Flow.createElement({
			id: "sap.viz.chart.elements.Title",
			name: "Title"
		});
		flow.addElement({
			"element": titleElement,
			"propertyCategory": "title",
			"place": "top"
		});

		var legendElement = sap.viz.extapi.Flow.createElement({
			id: "sap.viz.chart.elements.ColorLegend",
			name: "Legend",
			dimensionIndex: [1]
		});
		flow.addElement({
			"element": legendElement,
			"propertyCategory": "legend",
			"place": "right"
		});

		var element = sap.viz.extapi.Flow.createElement({
			id: "pp.viz.ext.watefallchartv3.PlotModule",
			name: "Waterfall Chart v3 Module"
		});
		element.implement("sap.viz.elements.common.BaseGraphic", moduleFunc);

		/*Feeds Definition*/
		var ds1 = {
			"id": "pp.viz.ext.watefallchartv3.PlotModule.DS1",
			"name": "Dimension",
			"type": "Dimension",
			"min": 0, //minimum number of data container
			"max": 2, //maximum number of data container
			"aaIndex": 1
		};
		element.addFeed(ds1);

		var ms1 = {
			"id": "pp.viz.ext.watefallchartv3.PlotModule.MS1",
			"name": "Start Measure",
			"type": "Measure",
			"min": 0, //minimum number of measures
			"max": Infinity, //maximum number of measures
			"mgIndex": 1
		};
		element.addFeed(ms1);

		var ms2 = {
			"id": "pp.viz.ext.watefallchartv3.PlotModule.MS2",
			"name": "End Measure",
			"type": "Measure",
			"min": 0, //minimum number of measures
			"max": Infinity, //maximum number of measures
			"mgIndex": 2
		};
		element.addFeed(ms2);

		var ms3 = {
			"id": "pp.viz.ext.watefallchartv3.PlotModule.MS3",
			"name": "Deviation",
			"type": "Measure",
			"min": 0, //minimum number of measures
			"max": Infinity, //maximum number of measures
			"mgIndex": 3
		};
		element.addFeed(ms3);

		element.addProperty({
			name: "colorPalette",
			type: "StringArray",
			supportedValues: "",
			defaultValue: d3.scale.category20().range().concat(d3.scale.category20b().range()).concat(d3.scale.category20c().range())
		});

		flow.addElement({
			"element": element,
			"propertyCategory": "plotArea"
		});
		sap.viz.extapi.Flow.registerFlow(flow);
	};
	flowRegisterFunc.id = "pp.viz.ext.watefallchartv3";
	return {
		id: flowRegisterFunc.id,
		init: flowRegisterFunc
	};
});