define([], function() {
	var previewData = {
		cross: {
			"data": {
				"analysisAxis": [{
					"index": 1,
					"data": [{
						"type": "Dimension",
						"name": "Kostenart",
						"values": ["10000", "20000", "30000", "40000", "50000", "60000", "70000", "80000", "90000", "100000", "110000", "120000",
							"130000", "140000", "150000", "160000", "170000"
						]
					}]
				}],
				"measureValuesGroup": [{
					"index": 1,
					"data": [{
						"type": "Measure",
						"name": "Plan",
						"values": [
							[5211.05, 3833.97, 3751.84, 6766.72, 5697.99, 2898.14, 2498.13, 865.05, 3186.94, 2234.38, 1498.26, 6547.92, 4208.97, 3797.03,
								9414.89, 7056.32, 3216.04
							]
						]
					}]
				}, {
					"index": 2,
					"data": [{
						"type": "Measure",
						"name": "Ist",
						"values": [
							[4692.76, 1683.42, 6151.64, 5360.13, 6672.81, 7416.09, 9567.86, 9881.37, 8679.37, 3876.39, 36.82, 2298.6, 8556.22, 1412.79,
								1178.63, 8273.62, 5760.05
							]
						]
					}]
				}, {
					"index": 3,
					"data": [{
						"type": "Measure",
						"name": "Diff",
						"values": [
							[-518.29, -2150.55, 2399.8, -1406.59, 974.82, 4517.95, 7069.73, 9016.32, 5492.43, 1642.01, -1461.44, -4249.32, 4347.25, -
								2384.24, -8236.26, 1217.3, 2544.01
							]
						]
					}]
				}]
			},
			"bindings": [{
				"feed": "pp.viz.ext.watefallchartv3.PlotModule.DS1",
				"source": [{
					"type": "analysisAxis",
					"index": 1
				}]
			}, {
				"feed": "pp.viz.ext.watefallchartv3.PlotModule.MS1",
				"source": [{
					"type": "measureValuesGroup",
					"index": 1
				}]
			}, {
				"feed": "pp.viz.ext.watefallchartv3.PlotModule.MS2",
				"source": [{
					"type": "measureValuesGroup",
					"index": 2
				}]
			}, {
				"feed": "pp.viz.ext.watefallchartv3.PlotModule.MS3",
				"source": [{
					"type": "measureValuesGroup",
					"index": 3
				}]
			}]
		},
		flat: {
			"metadata": {
				"dimensions": [{
					"name": "Kostenart",
					"value": "{Kostenart}"
				}],
				"measures": [{
					"name": "Plan",
					"value": "{Plan}"
				}, {
					"name": "Ist",
					"value": "{Ist}"
				}, {
					"name": "Diff",
					"value": "{Diff}"
				}],
				"data": {
					"path": "/data"
				}
			},
			"feedItems": [{
				"uid": "pp.viz.ext.watefallchartv3.PlotModule.DS1",
				"type": "Dimension",
				"values": ["Kostenart"]
			}, {
				"uid": "pp.viz.ext.watefallchartv3.PlotModule.MS1",
				"type": "Measure",
				"values": ["Plan"]
			}, {
				"uid": "pp.viz.ext.watefallchartv3.PlotModule.MS2",
				"type": "Measure",
				"values": ["Ist"]
			}, {
				"uid": "pp.viz.ext.watefallchartv3.PlotModule.MS3",
				"type": "Measure",
				"values": ["Diff"]
			}],
			"data": {
				"data": [{
					"Kostenart": "10000",
					"Ist": 4692.76,
					"Plan": 5211.05,
					"Diff": -518.29
				}, {
					"Kostenart": "20000",
					"Ist": 1683.42,
					"Plan": 3833.97,
					"Diff": -2150.55
				}, {
					"Kostenart": "30000",
					"Ist": 6151.64,
					"Plan": 3751.84,
					"Diff": 2399.8
				}, {
					"Kostenart": "40000",
					"Ist": 5360.13,
					"Plan": 6766.72,
					"Diff": -1406.59
				}, {
					"Kostenart": "50000",
					"Ist": 6672.81,
					"Plan": 5697.99,
					"Diff": 974.82
				}, {
					"Kostenart": "60000",
					"Ist": 7416.09,
					"Plan": 2898.14,
					"Diff": 4517.95
				}, {
					"Kostenart": "70000",
					"Ist": 9567.86,
					"Plan": 2498.13,
					"Diff": 7069.73
				}, {
					"Kostenart": "80000",
					"Ist": 9881.37,
					"Plan": 865.05,
					"Diff": 9016.32
				}, {
					"Kostenart": "90000",
					"Ist": 8679.37,
					"Plan": 3186.94,
					"Diff": 5492.43
				}, {
					"Kostenart": "100000",
					"Ist": 3876.39,
					"Plan": 2234.38,
					"Diff": 1642.01
				}, {
					"Kostenart": "110000",
					"Ist": 36.82,
					"Plan": 1498.26,
					"Diff": -1461.44
				}, {
					"Kostenart": "120000",
					"Ist": 2298.6,
					"Plan": 6547.92,
					"Diff": -4249.32
				}, {
					"Kostenart": "130000",
					"Ist": 8556.22,
					"Plan": 4208.97,
					"Diff": 4347.25
				}, {
					"Kostenart": "140000",
					"Ist": 1412.79,
					"Plan": 3797.03,
					"Diff": -2384.24
				}, {
					"Kostenart": "150000",
					"Ist": 1178.63,
					"Plan": 9414.89,
					"Diff": -8236.26
				}, {
					"Kostenart": "160000",
					"Ist": 8273.62,
					"Plan": 7056.32,
					"Diff": 1217.3
				}, {
					"Kostenart": "170000",
					"Ist": 5760.05,
					"Plan": 3216.04,
					"Diff": 2544.01
				}]
			}
		}
	};
	return previewData;
});