/*
*Genera contenido de pagina de login
*/
$(document).on("pagecreate","#login", function (event) {
	
	var header = "<h1>Ingreso al sistema</h1>";
	$("#header_login").html(header);

	var content = "<form>";
	content += "		<label for='userName'>Usuario:</label>";
	content += "		<input name='userName' id='userName' value='' type='text' data-clear-btn='true'/>";
	content += "		<label for='userPass'>Clave:</label>";
	content += "		<input name='userPass' id='userPass' value='' type='password' data-clear-btn='true'/>";
	content += "		<a href='#' id='ingresar' data-role='button' >Ingresar</a>"
	content += "  </form>";
	content += "  <div data-role='popup' id='popupDialog' data-overlay-theme='a' data-theme='c' data-dismissible='false' style='max-width:400px;' class='ui-corner-all'>";
	content += "		<div data-role='header' data-theme='a' class='ui-corner-top'>";
	content += "			<h1>Información</h1>";
	content += "		</div>";
	content += "		<div data-role='content' data-theme='d' class='ui-corner-bottom ui-content'>";
	content += "			<span id='GetLoginFail'></span>";
	content += "			<center><a href='#' data-role='button' data-inline='true' data-rel='back' data-transition='flow' data-theme='b'>Aceptar</a></center>";
	content += "		</div>";
	content += "  </div>";

	$("#content_login").html(content);

	var footer = "<center><p>Todo1 &copy</p></center>";
	$("#footer_login").html(footer);
});

$(document).on("pagecreate","#main", function (event) {
	
	var header = "<h1>Menu principal</h1>";
	$("#header_main").html(header);

	var content = "<ul data-role='listview'>";
	content += "	<li><a href='#' id='listUser'>Lista de usuarios</a></li>";
	content += "	<li><a href='#' id='searchUserOp'>Busqueda Usuarios</a></li>";
	content += "	<li><a href='#' id='listDocuments'>Lista de documentos</a></li>";
	content += "  </ul>";
	$("#content_main").html(content);

	var footer = "<p>Todo1 &copy</p>";
	$("#footer_main").html(footer);
});

$(document).on("pagecreate","#ListUser", function (event) {
	
	var header = "<h1>Lista de usuarios</h1>";
	$("#header_ListUser").html(header);

	var content = "<ul data-role='listview' id='List_user'>";
		content += "  </ul>";
	$("#content_ListUser").html(content);

	var footer = "<p>Todo1 &copy</p>";
	$("#footer_ListUser").html(footer);

	controller_user();

});

$(document).on("pagecreate","#SearchUser", function( event ){
	var header = '<h1>Busqueda Usuarios</h1>';
	$("#header_SearchUser").html(header);
	
	var content = '<form>';
	content += '<label for="idUser">identificacion</lable>';
	content += '<input name="idUser" id="idUser" value="" type="text" data-clear-btn="true">';
	content += '<br/>';
	content += '<a href="#" id="buttonQuery" data-role="button">Buscar</a>';
	content += '</form>';

	$("#content_SearchUser").html(content);
	
	var footer = '<p>Todo1</p>';
	$("#footer_SearchUser").html(footer);
});

$(document).on("pagecreate","#result", function(event){
	var header = '<h1>Usuarios</h1>';
	$("#header_result").html(header);
	
	var content = '<form>';
	content += '<label for="username">username</lable>';
	content += '<input name="username" id="username" value="" type="text" data-clear-btn="true">';
	content += '<br/>';
	content += '<label for="firstName">firstName</lable>';
	content += '<input name="firstName" id="firstName" value="" type="text" data-clear-btn="true">';
	content += '<br/>';
	content += '<label for="lastName">lastName</lable>';
	content += '<input name="lastName" id="lastName" value="" type="text" data-clear-btn="true">';
	content += '<br/>';

	$("#content_result").html(content);
	
	var footer = '<p>Todo1</p>';
	$("#footer_result").html(footer);
});

$(document).on("pagecreate","#documents",function (event) {
	var header = '<h1>Lista de Documentos</h1>';
	$('#header_documents').html(header);
	
	var content ='<ul id="documentList" data-role="listview">';
	content += '</ul>';

	content += "  <div data-role='popup' id='popupD' data-overlay-theme='a' data-theme='c' data-dismissible='false' style='max-width:400px;' class='ui-corner-all'>";
	content += "		<div data-role='header' data-theme='a' class='ui-corner-top'>";
	content += "			<h1>Información</h1>";
	content += "		</div>";
	content += "		<div data-role='content' data-theme='d' class='ui-corner-bottom ui-content'>";
	content += '			<label for="idDocuments">ID:</lable>';
	content += '			<input name="idDocuments" id="idDocuments" value="" type="text">';
	content += '			<br/>';
	content += '			<label for="nameDocument">Nombre:</lable>';
	content += '			<input name="nameDocument" id="nameDocument" value="" type="text" >';
	content += '			<br/>';
	content += '			<label for="descriptionDocument">Descripcion:</lable>';
	content += '			<input name="descriptionDocument" id="descriptionDocument" value="" type="text" >';
	content += "			<center><a href='#' data-role='button' data-inline='true' data-rel='back' data-transition='flow' data-theme='b'>Aceptar</a></center>";
	content += "		</div>";
	content += "  </div>";

	$('#content_documents').html(content);
	
	var footer = '<h4>Todo1 &copy;</h4>';
	$('#footer_documents').html(footer);

	listDocumentType();
});

$(document).on("pagecreate","#DocumentDetails", function(event){
	var header = '<h1>Detalle del Documento</h1>';
	$("#header_DocumentDetails").html(header);
	
	var content = '<form>';
	content += '<label for="idDocuments">ID:</lable>';
	content += '<input name="idDocuments" id="idDocuments" value="" type="text" data-clear-btn="true">';
	content += '<br/>';
	content += '<label for="nameDocument">Nombre:</lable>';
	content += '<input name="nameDocument" id="nameDocument" value="" type="text" data-clear-btn="true">';
	content += '<br/>';
	content += '<label for="descriptionDocument">Descripcion:</lable>';
	content += '<input name="descriptionDocument" id="descriptionDocument" value="" type="text" data-clear-btn="true">';
	content += '<br/>';

	$("#content_DocumentDetails").html(content);
	
	var footer = '<p>Todo1</p>';
	$("#footer_DocumentDetails").html(footer);
});