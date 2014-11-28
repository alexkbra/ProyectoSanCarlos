function conectar() {
    //var serverUrl = "http://env-6095240.jelastic.websolute.net.br/SanCarlos/";
    var serverUrl = "http://localhost/service/sancarlos/";
    var endpointUrl = null;
    var soapDoneMethod = null;
    var soapfailMethod = null;
    var data = null;

    this.getServerUrl = function() {
        return serverUrl;
    };

    this.setServerUrl = function(argument) {
        serverUrl = argument;
    };

    this.getEndpointUrl = function() {
        return endpointUrl;
    };

    this.setEndpointUrl = function(argument) {
        endpointUrl = argument;
    };

    this.getSoapDoneMethod = function() {
        return soapDoneMethod;
    };

    this.setSoapDoneMethod = function(argument) {
        soapDoneMethod = argument;
    };

    this.getSoapfailMethod = function() {
        return soapfailMethod;
    };

    this.setSoapfailMethod = function(argument) {
        soapfailMethod = argument;
    };

    this.getData = function() {
        return data;
    };

    this.setData = function(argument) {
        data = argument;
    };

}

conectar.prototype.sendSoapRequest = function(callback, callbackError) {
    try {
        var doneMethod = this.getSoapDoneMethod();
        var failMethod = this.getSoapfailMethod();
        $.ajax({
            type: "POST",
            dataType: "xml",
            url: this.getEndpointUrl(),
            data: this.getData(),
            success: function(argument) {
                doneMethod(argument, callback);
            },
            error: function(argument) {
                failMethod(argument, callbackError);
            },
            statusCode: {
                404: function() {
                    alert("page not found");
                }
            }
        });
    } catch (ex) {
        alert(ex);
    }
};

conectar.prototype.getConectar = function(action, callback, callbackError, data) {
    this.setEndpointUrl(this.getServerUrl() + action);
    this.setSoapDoneMethod(callback);
    this.setSoapfailMethod(callbackError);
    this.setData(data);
};

function ListPuntos() {

    var action = "PuntosServlet";

    this.getAction = function() {
        return action;
    };
    this.setAction = function(argument) {
        action = argument;
    };
}

ListPuntos.prototype.getListPuntos = function(parametros, callback, callbackError) {
    try {
        var con = new conectar();
        con.getConectar(this.getAction(), this.callback, this.callbackError, parametros);
        con.sendSoapRequest(callback, callbackError);
    } catch (ex) {

    }
};

ListPuntos.prototype.callback = function(data, callback) {
    $(data).find('punto').each(function(index) {
        var resultPuntos = new Puntos();
        resultPuntos.setId(parseInt($(this).find('id').text()));
        resultPuntos.setNombre($(this).find('nombre').text());
        resultPuntos.setDescripcion($(this).find('descripcion').text());
        
        resultPuntos.setLatitud($(this).find('latitud').text());
        resultPuntos.setLongitud($(this).find('longitud').text());
        
        var lisImg = new Array();
        $(this).find('imagen').each(function(c) {
            var imagen = new Imagenes();
            imagen.setId(parseInt($(this).find('id').text()));
            imagen.setUrl($(this).find('url').text());
            lisImg[c] = imagen;
        });
        resultPuntos.setImagenes(lisImg);
        var lisVideos = new Array();
        $(this).find('video').each(function(a) {
            var video = new Videos();
            video.setId(parseInt($(this).find('id').text()));
            video.setUrl($(this).find('url').text());
            lisVideos[a] = video;
        });
        resultPuntos.setVideos(lisVideos);
        var lisTexto = new Array();
        $(this).find('texto').each(function(b) {
            var texto = new Texto();
            texto.setId(parseInt($(this).find('id').text()));
            texto.setTexto($(this).find('textValue').text());
            texto.setTipo($(this).find('tipoTexto').text());
            lisTexto[b] = texto;
        });
        resultPuntos.setTextos(lisTexto);
        session.addPuntos(index, resultPuntos);
    });
    if (callback) {
        callback();
    }
};

ListPuntos.prototype.callbackError = function(data, callbackError) {
    if (callbackError) {
        callbackError();
    }
};