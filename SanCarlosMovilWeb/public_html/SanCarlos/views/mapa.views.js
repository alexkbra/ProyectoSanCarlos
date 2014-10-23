$(document).on("pagecreate", "#mapa", function(event) {

    var header = "<h1>Mapa</h1>";
    header += "<a href='#' data-rel='back' data-icon='delete'>Volver</a>";

    $("#header_mapa").html(header);
    var myHeight = window.innerHeight;
    var contenido = '<div id="map_canvas" style=\"height:' + myHeight + 'px;\"></div>';
    $("#content_mapa").html(contenido);

    var footer = "<div class='footer'><center><p>San Carlos</p></center></div>";
    $("#footer_mapa").html(footer);

});