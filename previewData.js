define([], function() {
    var previewData = {
        cross: {"data":{"analysisAxis":[{"index":1,"data":[{"type":"Dimension","name":"Kostenart","values":["10000","20000","30000","40000","50000"]}]}],"measureValuesGroup":[{"index":1,"data":[{"type":"Measure","name":"Ist","values":[[4692.76,1683.42,6151.64,5360.13,6672.81]]}]},{"index":2,"data":[{"type":"Measure","name":"Plan","values":[[5211.05,3833.97,3751.84,6766.72,5697.99]]}]},{"index":3,"data":[{"type":"Measure","name":"Diff","values":[[-518.29,-2150.55,2399.8,-1406.59,974.82]]}]}]},"bindings":[{"feed":"pp.viz.ext.waterfallchartv3.PlotModule.DS1","source":[{"type":"analysisAxis","index":1}]},{"feed":"pp.viz.ext.waterfallchartv3.PlotModule.MS1","source":[{"type":"measureValuesGroup","index":1}]},{"feed":"pp.viz.ext.waterfallchartv3.PlotModule.MS2","source":[{"type":"measureValuesGroup","index":2}]},{"feed":"pp.viz.ext.waterfallchartv3.PlotModule.MS3","source":[{"type":"measureValuesGroup","index":3}]}]},
        flat: {"metadata":{"dimensions":[{"name":"Kostenart","value":"{Kostenart}"}],"measures":[{"name":"Ist","value":"{Ist}"},{"name":"Plan","value":"{Plan}"},{"name":"Diff","value":"{Diff}"}],"data":{"path":"/data"}},"feedItems":[{"uid":"pp.viz.ext.waterfallchartv3.PlotModule.DS1","type":"Dimension","values":["Kostenart"]},{"uid":"pp.viz.ext.waterfallchartv3.PlotModule.MS1","type":"Measure","values":["Ist"]},{"uid":"pp.viz.ext.waterfallchartv3.PlotModule.MS2","type":"Measure","values":["Plan"]},{"uid":"pp.viz.ext.waterfallchartv3.PlotModule.MS3","type":"Measure","values":["Diff"]}],"data":{"data":[{"Kostenart":"10000","Ist":4692.76,"Plan":5211.05,"Diff":-518.29},{"Kostenart":"20000","Ist":1683.42,"Plan":3833.97,"Diff":-2150.55},{"Kostenart":"30000","Ist":6151.64,"Plan":3751.84,"Diff":2399.8},{"Kostenart":"40000","Ist":5360.13,"Plan":6766.72,"Diff":-1406.59},{"Kostenart":"50000","Ist":6672.81,"Plan":5697.99,"Diff":974.82}]}}
    };
    return previewData;
});