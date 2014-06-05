var map;
var wmsAddress = "http://mapserver.esipe.geonef.fr/tyria/GW2_complete_7500_7500";

function init() {
	map = new OpenLayers.Map('map');
		
	// rasters layers
	var worldRasters = new OpenLayers.Layer.WMS(
		"Map background",
		wmsAddress,
		{layers: 'tyriaRasterLayerName,rata_sum,metrica,caledon_forest'/*, format: 'image/jpeg'*/},
		{isBaseLayer: true}
	);
	
	// points layers
	var remarkablePointsLayer = new OpenLayers.Layer.WMS(
		"Remarkable points",
		wmsAddress,
		{layers:'remarkable_points', transparent:true/*, format:'image/png'*/},
		{isBaseLayer: false}
	);
	//remarkablePointsLayer.setOpacity(0.5);
	
	var npcLayer = new OpenLayers.Layer.WMS(
		"Non player characters",
		wmsAddress,
		{layers:'npc', transparent:true},
		{isBaseLayer: false}
	);
	
	// line layers
	var roadsLayer = new OpenLayers.Layer.WMS(
		"Roads",
		wmsAddress,
		{layers:'roads', transparent:true},
		{isBaseLayer: false}
	);
	
	// polygon layers
	var regionsLayer = new OpenLayers.Layer.WMS(
		"Regions",
		wmsAddress,
		{layers:'regions,limites_regions', transparent:true},
		{isBaseLayer: false}
	);

	var hydroLayer = new OpenLayers.Layer.WMS(
		"Hydrology",
		wmsAddress,
		{layers:'hydro', transparent:true},
		{isBaseLayer: false}
	);

	var territoriesLayer = new OpenLayers.Layer.WMS(
		"Peoples",
		wmsAddress,
		{layers:'territories', transparent:true},
		{isBaseLayer: false}
	);
	
	map.addLayers([ worldRasters,
			regionsLayer,
			hydroLayer,
			territoriesLayer,
			roadsLayer,
			remarkablePointsLayer,
			npcLayer]);
	
	//map.zoomToMaxExtent();
	map.zoomToExtent(new OpenLayers.Bounds(-33,-18,-7.5,8), true);

	map.addControl( new OpenLayers.Control.OverviewMap(/*{'div':OpenLayers.Util.getElement('overviewmap')}*/));
	map.addControl( new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('layerswitcher')}));
	map.addControl(new OpenLayers.Control.ScaleLine());
	
	/* map.addControl( new OpenLayers.Control.LayerSwitcher({'baseLblTitle':"Tyrie", 'dataLblTitle':"Couches", 'div':OpenLayers.Util.getElement('layerswitcher')}));
	 * document.getElementById("OpenLayers.Control.LayerSwitcher_18_layersDiv").getElementsByClassName("baseLbl")[0].innerHTML = "";
	 * document.getElementById("layerswitcher").firstChild.firstChild.innerHTML = "Tyrie";*/
	 
	/* D'autres contrôles de carte, au cas où..
	 * map.addControl( new OpenLayers.Control.LayerSwitcher({'ascending':false}));
	 * map.addControl( new OpenLayers.Control.OverviewMap());
	 * map.addControl( new OpenLayers.Control.PanZoomBar());
	 * map.addControl( new OpenLayers.Control.LayerSwitcher({'ascending':false}));*/
}

/*see also :
 * http://dev.openlayers.org/releases/OpenLayers-2.8/doc/apidocs/files/OpenLayers/Control-js.html
 * http://openlayers.org/dev/examples/controls.html
 * http://dev.openlayers.org/docs/files/OpenLayers/Control/LayerSwitcher-js.html
 * http://workshops.boundlessgeo.com/openlayers-intro/layers/proprietary.html
 * https://gisnuts.com/terra/blog/2013/07/05/styling-the-layer-switcher-for-openlayers
 */