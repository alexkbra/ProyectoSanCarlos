var usadosImg = new Array();
var usadosVideos = new Array();
$(document).on("pagecreate", "#detalle", function(event) {

    var header = "<h1>" + session.getSelectPunto().getNombre() + "</h1>";
    header += "<a href='#' data-rel='back' data-icon='delete'>Volver</a>";
    $("#header_detalle").html(header);

    limpiarContenido();
    cargarContenido();

    var footer = "<div class='footer'><center><p>San Carlos</p></center></div>";
    $("#footer_detalle").html(footer);

});
function cargarContenido() {
    var punto = session.getSelectPunto();
    var imagenes = punto.getImagenes();
    var videos = punto.getVideos();
    var textos = punto.getTextos();
    var multimediaImagenes = '';
    var multimediaVideos = '';
    var contImg = 0;
    for (var i = 0; i < imagenes.length; i++) {
        multimediaImagenes += '<div class="table_row imgGallery">';
        for (var j = 0; j < 3 & j < imagenes.length; j++) {
            var img = imagenes[contImg];
            multimediaImagenes += '<div class="table_cell imgGallery" >'
                    + '<a href = "#I' + img.getId() + '" data-rel="popup" data-position-to="window" data-transition="fade">'
                    + '<img class="popphoto" src = "' + img.getUrl() + '" style="width:100%"/>'
                    + '</a>';

            multimediaImagenes += '<div data-role="popup" id="I' + img.getId() + '" data-overlay-theme="a" data-theme="d" data-corners="false"><a href = "#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a> <img class="popphoto" src = "' + img.getUrl() + '" style="max-height:512px;" /> </div>';
            multimediaImagenes += '</div>';
            contImg++;
            i = contImg;
        }
        multimediaImagenes += '</div>';
    }
    for (var i = 0; i < videos.length; i++) {
        multimediaVideos += '<div class="VidGallery">';
        multimediaVideos += '<div>';
        var video = videos[i];
        var url = video.getUrl().replace("watch?v=","embed/");
        multimediaVideos += '<iframe src="' + url + '" style="width:100%;height: 250px;" frameborder="0" allowfullscreen></iframe>';
        //  + '<a href = "#V' + video.getId() + '" data-role="button" data-rel="popup" data-position-to="window" data-transition="fade">Ver</a>';

        //multimediaVideos += '<div data-role="popup" id="V' + video.getId() + '" data-overlay-theme="a" data-theme="d" data-corners="false"><a href = "#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a> <iframe src = "' + video.getUrl() + '"  style="max-height:512px;" ></iframe> </div>';
        multimediaVideos += '</div>';
        multimediaVideos += '</div>';
    }
    
    $(multimediaImagenes).appendTo($("#galleryImg"));
    $(multimediaVideos).appendTo($("#galleryVid"));
    var titulos = "";
    var descripciones = "<h1>Descripción</h1> \n";
    for (i = 0; i < textos.length; i++) {
        if (textos[i].getTipo() === "Titulo") {
            titulos += "<h2>" + textos[i].getTexto() + "</h2> ,";
        } else {
            if (textos[i].getTipo() === "Descripcion") {
                descripciones += "<p>" + textos[i].getTexto() + "</p> \n";
            }
        }
    }
    $(titulos).appendTo($("#textos"));
    $(descripciones).appendTo($("#textos"));
}
function limpiarContenido() {
    $("#galleryImg").empty();
    $("#galleryVid").empty();
    $("#textos").empty();
}
function aleatorioImg(min, max) {
    if (usadosImg.length !== (max - min)) {
        while (repe !== false) {
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            var repe = repetidoImg(num);
        }
        usadosImg.push(num);
        return num;
    } else {
        return 0;
    }
}
function repetidoImg(num) {
    var repe = false;
    for (var i = 0; i < usadosImg.length; i++) {
        if (num === usadosImg[i]) {
            repe = true;
        }
    }
    return repe;
}

function aleatorioVideos(min, max) {
    if (usadosVideos.length !== (max - min)) {
        while (repe !== false) {
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            var repe = repetidoVideos(num);
        }
        usadosVideos.push(num);
        return num;
    } else {
        return 0;
    }
}
function repetidoVideos(num) {
    var repe = false;
    for (var i = 0; i < usadosVideos.length; i++) {
        if (num === usadosVideos[i]) {
            repe = true;
        }
    }
    return repe;
}