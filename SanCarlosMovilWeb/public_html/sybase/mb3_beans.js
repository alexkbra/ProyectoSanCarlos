function Session() {
    var listPuntos = new Array();
    var punto = null;

    this.getListPuntos = function() {
        return listPuntos;
    };

    this.setListPuntos = function(arg) {
        listPuntos = arg;
    };

    this.addPuntos = function(id, punto) {
        listPuntos[id] = punto;
    };

    this.removePunto = function(id) {
        for (var i = 0; i < listPuntos.length; i++) {
            if (listPuntos[i].getId() === id) {
                listPuntos.splice(i, i);
                break;
            }
        }
    };

    this.getListPuntosLength = function() {
        return listPuntos.length;
    };

    this.getPuntos = function(id) {
        for (var i = 0; i < listPuntos.length; i++) {
            if (listPuntos[i].getId() === id) {
                return listPuntos[i];
            }
        }
    };

    this.setSelectPunto = function(arg) {
        punto = arg;
    };
    this.getSelectPunto = function() {
        return punto;
    };
}

function Puntos() {
    var Id = null;
    var Nombre = null;
    var Descripcion = null;
    var Latitud = null;
    var Longitud = null;
    var Imagenes = null;
    var Videos = null;
    var Textos = null;

    this.setTextos = function(arg) {
        Textos = arg;
    };

    this.getTextos = function() {
        return Textos;
    };

    this.setVideos = function(arg) {
        Videos = arg;
    };

    this.getVideos = function() {
        return Videos;
    };

    this.setImagenes = function(arg) {
        Imagenes = arg;
    };

    this.getImagenes = function() {
        return Imagenes;
    };

    this.setLongitud = function(arg) {
        Longitud = arg;
    };

    this.getLongitud = function() {
        return Longitud;
    };

    this.setLatitud = function(arg) {
        Latitud = arg;
    };

    this.getLatitud = function() {
        return Latitud;
    };

    this.setDescripcion = function(arg) {
        Descripcion = arg;
    };

    this.getDescripcion = function() {
        return Descripcion;
    };

    this.setNombre = function(arg) {
        Nombre = arg;
    };

    this.getNombre = function() {
        return Nombre;
    };

    this.setId = function(arg) {
        Id = arg;
    };

    this.getId = function() {
        return Id;
    };
}

function Imagenes() {
    var Id = null;
    var Url = null;

    this.setId = function(arg) {
        Id = arg;
    };

    this.getId = function() {
        return Id;
    };

    this.setUrl = function(arg) {
        Url = arg;
    };

    this.getUrl = function() {
        return Url;
    };
}

function Videos() {
    var Id = null;
    var Url = null;

    this.setId = function(arg) {
        Id = arg;
    };

    this.getId = function() {
        return Id;
    };

    this.setUrl = function(arg) {
        Url = arg;
    };

    this.getUrl = function() {
        return Url;
    };
}

function Texto() {
    var Id = null;
    var Texto = null;
    var Tipo = null;

    this.setId = function(arg) {
        Id = arg;
    };

    this.getId = function() {
        return Id;
    };

    this.setTexto = function(arg) {
        Texto = arg;
    };

    this.getTexto = function() {
        return Texto;
    };

    this.setTipo = function(arg) {
        Tipo = arg;
    };

    this.getTipo = function() {
        return Tipo;
    };
}
