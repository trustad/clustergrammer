var run_transformation = require('./run_transformation');
var zoom_rules_y = require('./zoom_rules_y');
var zoom_rules_x = require('./zoom_rules_x');

module.exports = function zoomed(params) {

  var zoom_info = {};
  zoom_info.zoom_x = d3.event.scale;
  zoom_info.zoom_y = d3.event.scale;
  zoom_info.trans_x = d3.event.translate[0] - params.viz.clust.margin.left;
  zoom_info.trans_y = d3.event.translate[1] - params.viz.clust.margin.top;

  // params.zoom_info = zoom_info;

  d3.selectAll(params.viz.root_tips)
    .style('display','none');


  zoom_info = zoom_rules_y(params, zoom_info);

  zoom_info = zoom_rules_x(params, zoom_info);

  // do not run transformation if moving slider
  if (params.is_slider_drag === false && params.is_cropping === false){
    run_transformation(params, zoom_info);
  }

};
