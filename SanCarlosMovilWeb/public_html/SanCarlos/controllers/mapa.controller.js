var map = null;
var lat = null;
var long = null;
$(document).on("pagebeforeshow", "#mapa", function(event) {
    getLocation();
});

function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccessMapa, onErrorMapa, {enableHighAccuracy: true});
}

function onSuccessMapa(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    pintarPuntos();
}

function onErrorMapa(error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}