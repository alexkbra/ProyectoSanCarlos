var session = new Session();
function getIdPunto(Id) {
    session.setSelectPunto(session.getPuntos(Id));
    //$("#detalle").trigger("create");
    
    $.mobile.changePage($("#detalle"), {
        transition: "slide",
        reverse: true
    });
    $("#detalle").trigger('pagecreate');
}
google.maps.event.addDomListener(window, 'load', pintarPuntos);
function pintarPuntos() {
    /*var listar = new listar_Puntos();
    listar.Start();*/

    var latlng = new google.maps.LatLng(lat, long);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'Hello World!',
      draggable:true,
      animation: google.maps.Animation.DROP
    });
    var infowindow = new google.maps.InfoWindow();
      infowindow.setContent('<h1>el poli</h1>');
      google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
    });


    google.maps.event.addListener(marker, 'click', function () {
          if (marker.getAnimation() != null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
    });
}

function listar_Puntos() {
}

listar_Puntos.prototype.onSuccer = function() {
    var listPuntos = session.getListPuntos();
    var puntosGrup = new L.LayerGroup();

    for (var i = 0; i < listPuntos.length; i++) {
        L.marker([listPuntos[i].getLatitud(), listPuntos[i].getLongitud()]).addTo(puntosGrup).bindPopup("<div><b>" + listPuntos[i].getNombre() + "</b></div><div style='border-top:1px solid #f0f0e7;padding-top:5px;margin-top:5px;clear:both;'>" + listPuntos[i].getDescripcion() + "</div><div style='border-top:1px solid #f0f0e7;padding-top:5px;margin-top:5px;clear:both;'><a href=\"#\" onclick=\"getIdPunto(" + listPuntos[i].getId() + ")\">Detalle</div>");
    }
    var osm_mapnik = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom: 21, maxNativeZoom: 18, minZoom: 1, errorTileUrl: "http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/inc/img/error-tile-image.png", attribution: "Mapa: &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">Contribuidores de Openstreetmap</a>&nbsp;(<a href=\"http://www.openstreetmap.org/edit?editor=id&amp;lat=41.447652&amp;lon=1.970150&zoom=11\" target=\"_blank\" title=\"ayuda a Openstreetmap.org a mejorar los detalles del mapa\">editar</a>)", detectRetina: true});
    var mapquest_osm = new L.TileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {maxZoom: 21, maxNativeZoom: 18, minZoom: 1, errorTileUrl: "http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/inc/img/error-tile-image.png", attribution: "Mapa: Tiles Courtesy of <a href=\"http://www.mapquest.com/\" target=\"_blank\">MapQuest</a> <img src=\"http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/inc/img/logo-mapquest.png\" style=\"display:inline;\" /> - &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">Contribuidores de Openstreetmap</a>&nbsp;(<a href=\"http://www.openstreetmap.org/edit?editor=id&amp;lat=41.447652&amp;lon=1.970150&zoom=11\" target=\"_blank\" title=\"ayuda a Openstreetmap.org a mejorar los detalles del mapa\">editar</a>)", subdomains: ["otile1", "otile2", "otile3", "otile4"], detectRetina: true});
    var mapquest_aerial = new L.TileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png", {maxZoom: 21, maxNativeZoom: 11, minZoom: 1, errorTileUrl: "http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/inc/img/error-tile-image.png", attribution: "Mapa: <a href=\"http://www.mapquest.com/\" target=\"_blank\">MapQuest</a> <img src=\"http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/inc/img/logo-mapquest.png\" />, Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency", subdomains: ["otile1", "otile2", "otile3", "otile4"], detectRetina: true});
    var googleLayer_hybrid = new L.Google("HYBRID", {detectRetina: true});
    var googleLayer_satellite = new L.Google("SATELLITE", {detectRetina: true});
    var custom_basemap = new L.TileLayer("http://tile.opencyclemap.org/cycle/{z}/{x}/{y}.png", {maxZoom: 21, maxNativeZoom: 17, minZoom: 1, tms: false, errorTileUrl: "http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/inc/img/error-tile-image.png", attribution: "Mapa: © <a href=\"http://openstreetmap.org/\">OpenStreetMap contributors</a>, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>", continuousWorld: false, noWrap: false, detectRetina: true});
    var custom_basemap2 = new L.TileLayer("http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg", {maxZoom: 21, maxNativeZoom: 17, minZoom: 1, tms: false, errorTileUrl: "http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/inc/img/error-tile-image.png", attribution: "Mapa: Map tiles: <a href=\"http://stamen.com\">Stamen Design</a>, <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. Data: <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, <a href=\"http://creativecommons.org/licenses/by-sa/3.0\">CC BY SA</a>", continuousWorld: false, noWrap: false, detectRetina: true});
    var custom_basemap3 = new L.TileLayer("http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png", {maxZoom: 21, maxNativeZoom: 18, minZoom: 1, tms: false, errorTileUrl: "http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/inc/img/error-tile-image.png", attribution: "Mapa: © Gravitystorm Ltd. <a href=\"http://www.thunderforest.com\">Thunderforest</a>", subdomains: ["a", "b", "c"], continuousWorld: false, noWrap: false, detectRetina: true});
    var layersControl = new L.Control.Layers({'OpenStreetMap': osm_mapnik, 'Mapquest (OSM)': mapquest_osm, 'Mapquest (Aerial)': mapquest_aerial, 'Google Maps (Hybrid)': googleLayer_hybrid, 'Google Maps (Satellite)': googleLayer_satellite, 'Open Cycle Map': custom_basemap, 'Stamen Watercolor': custom_basemap2, 'Transport Map': custom_basemap3}, {}, {collapsed: true});
    if(map === null){
        map = new L.Map("map_canvas", {center: [lat, long], zoom: 10, dragging: true, touchZoom: true, scrollWheelZoom: true, doubleClickZoom: true, boxzoom: true, trackResize: true, worldCopyJump: false, closePopupOnClick: true, keyboard: true, keyboardPanOffset: 80, keyboardZoomOffset: 1, inertia: true, inertiaDeceleration: 3000, inertiaMaxSpeed: 1500, zoomControl: true, fullscreenControl: true});
        map.addLayer(custom_basemap).addLayer(puntosGrup).addControl(layersControl);
    }
    L.marker([lat, long]).addTo(map).bindPopup("<div><b>Te encuentras</b></div><div style='border-top:1px solid #f0f0e7;padding-top:5px;margin-top:5px;clear:both;'>¡¡Aquí!!</div>").openPopup();
    

    /*L.control.scale({position: 'bottomleft', maxWidth: 100, metric: true, imperial: true, updateWhenIdle: false}).addTo(map);
     L.control.locate({position: 'topleft', drawCircle: true, follow: true, setView: true, keepCurrentZoomLevel: true, remainActive: false, circleStyle: {}, markerStyle: {}, followCircleStyle: {}, followMarkerStyle: {}, icon: 'icon-cross-hairs', circlePadding: [0, 0], metric: true, showPopup: true, strings: {title: 'Show me where I am', popup: 'You are within {distance} {unit} from this point', outsideMapBoundsMsg: 'You seem located outside the boundaries of the map'}, locateOptions: {watch: true}}).addTo(map);
     var marker = new L.Marker(new L.LatLng(41.447652, 1.970150), {title: '50120', opacity: 1, alt: "50120"});
     marker.options.icon = new L.Icon({iconUrl: 'http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/leaflet-dist/images/marker.png', iconSize: [32, 37], iconAnchor: [17, 36], popupAnchor: [-1, -32], shadowUrl: 'http://www.castelltort.com/wp-content/plugins/leaflet-maps-marker-pro/leaflet-dist/images/marker-shadow.png', shadowSize: [41, 41], shadowAnchor: [16, 43], className: 'lmm_marker_icon_default'});
     map.addLayer(marker);*/

    //L.addLayer(osm_mapnik);
    /*var popup = L.popup();
     function onMapClick(e) {
     popup.setLatLng(e.latlng);
     popup.setContent("<h1>Tu</h1> click fue en" + e.latlng.toString());
     popup.openOn(map);
     }
     map.on('click', onMapClick);*/

};

listar_Puntos.prototype.onError = function() {
    alert("Error en el servicio");
};

listar_Puntos.prototype.Start = function() {
    var listPuntos = new ListPuntos();
    listPuntos.getListPuntos(null, this.onSuccer, this.onError);
};

