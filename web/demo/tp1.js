var map;

function init() {
  map = new OpenLayers.Map('map');
  var wms = new OpenLayers.Layer.WMS(
    "OpenLayers WMS",
    "http://mapserver.esipe.geonef.fr/test-project/tp1",
    { layers: 'mygeom', format: "image/png" }
  );

  map.addLayers([wms]);
  map.zoomToMaxExtent();

}
