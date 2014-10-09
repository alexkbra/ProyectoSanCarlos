
$(document).on("pagebeforeshow","#login",function (event) {
	$("#ingresar").click(function (event) {

		var userName = $("#userName").val();
		var userPassword = $("#userPass").val();
		if(userName=="alex" & userPassword == "1234"){
			$.mobile.changePage($("#main"), {transition: 'slide', reverse: false});
		}else{
			getMessage();
		}
	});
});

$(document).on("pagebeforeshow","#main",function (event) {
	$("#listUser").click(function (event) {
		transition_user_list(event);
	});
	$("#searchUserOp").click(function (event) {
		$.mobile.changePage($("#SearchUser"),{transition: 'slide',reverse: false});
	});

	$("#listDocuments").click(function (event) {
		getList();
	});

});

function transition_user_list(event){
	$.mobile.changePage($("#ListUser"),{transition: 'slide',reverse: false});
}

function controller_user () {
	var $listUse = $("#List_user");
	$listUse.empty();

	var usuario1 = new MBUser();
	usuario1.username = 'aensitein';
	usuario1.firstName = 'Albert';
	usuario1.lastName = 'Einstein';
	
	var usuario2 = new MBUser();
	usuario2.username = 'leuler';
	usuario2.firstName = 'Leonhard ';
	usuario2.lastName = 'Euler';
	
	var usuario3 = new MBUser();
	usuario3.username = 'ntesla';
	usuario3.firstName = 'Nikola ';
	usuario3.lastName = 'Tesla';
	
	var usuario4 = new MBUser();
	usuario4.username = 'akepler';
	usuario4.firstName = 'Alfred';
	usuario4.lastName = 'Kepler';

	var listuser = [usuario1,usuario2,usuario3,usuario4];

	$.each(listuser, function  (i, obj) {
		$("<li>" + obj.username +"</li>").appendTo($listUse);
	});
}

$(document).on("pagebeforeshow", "#SearchUser", function (event) {
	$("#buttonQuery").click(function (event) {
		MBQueryUserConnector.getUser(onQuerySuccess,onQueryError);
	});

});

function onQuerySuccess (user) {
	session.user = user;
	$.mobile.changePage($("#result"),{transition: 'slide',reverse: false});
}

function onQueryError () {
	alert("no se pudo consultar el usuario")
}


$(document).on("pagebeforeshow","#result",function (event) {
	$("#username").val(session.user.username);
	$("#firstName").val(session.user.firstName);
	$("#lastName").val(session.user.lastName);
});

$(document).on("pagebeforeshow","#documents",function (event) {
});

$(document).on("pagebeforeshow","#DocumentDetails",function (event) {
});

function listDocumentType () {
	var $list = $('#documentList');
	$list.empty();
	for(var i=0; i<session.documentList.length; i++) {
		$('<li><a>' + session.documentList[i].name + '</a></li>').click({doc: session.documentList[i],index: i}, function(event) {
			/*$.mobile.changePage("#DocumentDetails", {
	          transition: "slide"
	        });*/
			$( "#popupD" ).popup( "open" );
			alert(event.data.index);
	        $("#idDocuments").val(event.data.doc.id);
			$("#nameDocument").val(event.data.doc.name);
			$("#descriptionDocument").val(event.data.doc.description);
		}).appendTo($list);
	}
	$list.listview();
	session.documentList = null;
}



function getList() {
	MBGetistConnector.getGetList(onGetListSuccess,onGetListError);
}

function onGetListError() {
	alert('No se ha podido obtener el listado');
}

function onGetListSuccess(documentList) {
	session.documentList = documentList;
	$.mobile.changePage($("#documents"), {
        transition : 'slide',
        reverse : false
    });
}

function getMessage () {
	MBGetPostConnector.getPost(onMessageSuccesss,onMessageError);
}

function onMessageError () {
	alert("Intente ingresar mas tarde.");
}

function onMessageSuccesss (message) {
	$( "#popupDialog" ).popup( "open" );
	$("#GetLoginFail").text(message);
}