$(document).on("pagecreate","#sphashInicio",function  (event) {
	
	$('#promoIMG').splashScreen({
		textLayers : [
			'../imagenes/thinner.png',
			'../imagenes/tmore_elegant.png',
			'../imagenes/img/our_new.png'
		]
	});
})