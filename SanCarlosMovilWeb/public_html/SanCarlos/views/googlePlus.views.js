$(document).on("pagecreate", "#googlePlus", function(event) {

    var header = "<h1>Noticias</h1>";
    header += "<a href='#' data-rel='back' data-icon='delete'>Volver</a>";
    $("#header_googlePlus").html(header);
    
    var myHeight = window.innerHeight;
    var contenido = '<iframe src="https://plus.google.com/104481078486279478403/posts" id="googlePlusIframe" style=\"height:' + myHeight + 'px;\"></iframe>';
    $("#content_googlePlus").html(contenido);

    var footer = "<div class='footer'><center><p>San Carlos</p></center></div>";
    $("#footer_googlePlus").html(footer);

});

