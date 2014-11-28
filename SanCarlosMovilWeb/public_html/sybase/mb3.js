var session = new Session();
google.maps.event.addDomListener(window, 'load', pintarPuntos);

function getIdPunto(Id) {
    session.setSelectPunto(session.getPuntos(Id));
    //$("#detalle").trigger("create");
    
    $.mobile.changePage($("#detalle"), {
        transition: "slide",
        reverse: true
    });
    $("#detalle").trigger('pagecreate');
}

function pintarPuntos() {
    var listar = new listar_Puntos();
    listar.Start();
    
}

function listar_Puntos() {
}

listar_Puntos.prototype.onSuccer = function() {

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
      title: 'Tu estas Aqui!',
      draggable:true,
      animation: google.maps.Animation.DROP
    });

    var infowindow = new google.maps.InfoWindow();
      infowindow.setContent('<h1>Tu estas Aquí</h1>');
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

    for (var i = 0; i < session.getListPuntosLength(); i++) {
        var punto = session.getPunto(i);

        var latlngPuntos = new google.maps.LatLng(punto.getLatitud(),punto.getLongitud());

        var markerPuntos = new google.maps.Marker({
          position: latlngPunto,
          map: map,
          title: punto.getNombre(),
          draggable:true,
          animation: google.maps.Animation.DROP
        });

        var infowindowPuntos = new google.maps.InfoWindow();

        var html = '<h1>'+punto.getNombre()+'</h1>';

        html += '<p>'+ punto.getDescripcion() +'</p>';

        html += '<a href="" onclick="paintPuntoDetalle('+i+')" data-role="button" data-mini="true" data-inline="true" data-icon="arrow-r" data-theme="c">Detalle</a>';



        infowindowPuntos.setContent(html);

        google.maps.event.addListener(markerPuntos, 'click', function() {
              infowindowPuntos.open(map, markerPuntos);
        });

        google.maps.event.addListener(markerPuntos, 'click', function () {
              if (marker.getAnimation() != null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
              }
        });
    };
    
};

function paintPuntoDetalle (id) {   
  var punto = session.getPunto(i);
  session.setSelectPunto(punto);
  $.mobile.changePage($("#detalle"), {
        transition: "slide",
        reverse: true
    });
  $("#detalle").trigger('pagecreate');
}

listar_Puntos.prototype.onError = function() {
    alert("Error en el servicio");
};

listar_Puntos.prototype.Start = function() {
    var listPuntos = new ListPuntos();
    listPuntos.getListPuntos(null, this.onSuccer, this.onError);
};

