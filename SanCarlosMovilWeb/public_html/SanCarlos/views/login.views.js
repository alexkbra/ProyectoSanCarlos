$(document).on("pagecreate", "#login", function(event) {

    var header = "<h1>Ingreso al sistema</h1>";
    $("#header_login").html(header);

    var contenido = '<div>';
    contenido += '<ul id="menu"><li><a href="#mapa"> Mapa </a></li><li><a href="#googlePlus"> Noticias </a></li><li><a href="#natybosInf"> Natybos </a></li>';
    contenido += '</div>';
    $("#content_login").html(contenido);

    var footer = "<div class='footer'><center><p>San Carlos</p></center></div>";
    $("#footer_login").html(footer);
});