$(document).on("pagecreate", "#natybosInf", function(event) {

    var header = "<h1>Natybos</h1>";
    header += "<a href='#' data-rel='back' data-icon='delete'>Volver</a>";
    $("#header_natybosInf").html(header);

    var contenido = '<div class="natybosInf">';
    contenido += '<h1>Corporación Natybos</h1>';
    contenido += '<p>Es un colectivo de jóvenes oriundos del Municipio de San Carlos Antioquia,'
            + 'quienes trabajan por la protección de los recursos ambientales de este territorio,'
            + 'además son personas que resistieros la oleada de violencia que asotó a este municipio entre 1998 y 2008, '
            + 'los servicios prestados son: </p>';
    contenido += '<ol>';
    contenido += '<li>Cinco rutas de Naturaleza.</li>';
    contenido += '<li>Posadas y Cabañas Turísticas en Guadua.</li>';
    contenido += '<li>Mantenimiento de los senderos ecológicos y las zonas verdes.</li>';
    contenido += '<li>Guianza interpretativa por rutas de naturaleza.</li>';
    contenido += '<li>Talleres Ecológicos.</li>';
    contenido += '</ol>';

    $("#content_natybosInf").html(contenido);

    var footer = "<div class='footer'><center><p>San Carlos</p></center></div>";
    $("#footer_natybosInf").html(footer);

});
