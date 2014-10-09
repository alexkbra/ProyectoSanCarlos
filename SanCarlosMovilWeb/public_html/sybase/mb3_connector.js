function MBConnector() {
    this.serverUrl = 'http://localhost/cb/mbanking/services/';
    this.SoapHeader = '<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns1="http://services.mbanking.sybase.com/schema" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n ' +
            '<soapenv:Header/>\n<soapenv:Body>\n';
    this.SoapFooter = '</soapenv:Body></soapenv:Envelope>';
    this.getXHR = function() {
        try {
            if (window.XMLHttpRequest) {
                var req = new XMLHttpRequest();
                if (req.readyState == null) {
                    req.readyState = 1;
                    req.addEventListener("load",
                            function() {
                                req.readyState = 4;
                                if (typeof req.onreadystatechange == "function")
                                    req.onreadystatechange();
                            }, false);
                }
                return req;
            }
            if (window.ActiveXObject)
                return new ActiveXObject(MBConnector._getXmlHttpProgID());
        }
        catch (ex) {
        }
        throw new Error("Your browser does not support XmlHttp objects");
    }
}

MBConnector._getXmlHttpProgID = function()
{
    if (MBConnector._getXmlHttpProgID.progid)
        return MBConnector._getXmlHttpProgID.progid;
    var progids = ["Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    var o;
    for (var i = 0; i < progids.length; i++) {
        try {
            o = new ActiveXObject(progids[i]);
            return MBConnector._getXmlHttpProgID.progid = progids[i];
        }
        catch (ex) {
        }
        ;
    }
    throw new Error("Could not find an installed XML parser");
}

MBConnector.sendSoapRequest = function(con, action, soap, callback, extra) {
    var xhr = con.getXHR();
    if (window.location.protocol == "file:" && navigator.userAgent.indexOf("Firefox") != -1) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        }
        catch (e) {
            alert("Permission UniversalBrowserRead denied -- not running Mozilla?");
        }
    }

    soap = con.SoapHeader + '<ns1:' + action + '>\n' + soap + '</ns1:' + action + '>\n' + con.SoapFooter;
    console.log(soap);
    console.log("---- send soap ----\r\n" + soap);
    xhr.open("POST", con.endpointUrl, true);
    xhr.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    xhr.setRequestHeader("SOAPAction", '"urn:' + action + '"');
    xhr.setRequestHeader("Pragma", "no-cache");
    xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=-1, must-revalidate, proxy-revalidate");
    xhr.setRequestHeader("Expires", "-1");
    xhr.onreadystatechange = function() {
        console.log("---- readyState is " + xhr.readyState);
        if (xhr.readyState == 4) {
            console.log("---- response message ----\r\n" + this.responseText);
            con.soapDoneMethod(con, xhr, action, callback, extra);
        }
    }
    xhr.send(soap);
    return false;
}

function MBQueryUserConnector() {

}

MBQueryUserConnector.getConnector = function() {
    var con = new MBConnector();
    con.endpointUrl = con.serverUrl + 'GetUser';
    con.soapDoneMethod = MBQueryUserConnector._sendSoapRequest;
    return con;
};

MBQueryUserConnector.getUser = function(callback, errorCallBack) {
       try {
        var soap = '<requestInfo>' +
                     '  <sessionData></sessionData>' +
                            '</requestInfo>';
        MBConnector.sendSoapRequest(MBQueryUserConnector.getConnector(), 'GetUser', soap, callback, errorCallBack);
    } catch (ex) {
       errorCallBack();
    }
};

MBQueryUserConnector._sendSoapRequest = function(con, xhr, action, callback, errorCallBack) {
       var root = xhr.responseXML.getElementsByTagNameNS('*' ,action + 'Response');
    if (root) {
       var userNode = root[0].children[0];
       var user = new MBUser();
       user.username = userNode.children[0].textContent;
       user.firstName = userNode.children[1].textContent;
       user.lastName = userNode.children[2].textContent;
       callback(user);
    } else {
       errorCallBack();
    }
};


function MBGetistConnector() {
}

MBGetistConnector.getConnector = function() {
    var con = new MBConnector();
    con.endpointUrl = con.serverUrl + 'GetList';
    con.soapDoneMethod = MBGetistConnector._sendSoapRequest;
    return con;
};

MBGetistConnector.getGetList = function(callback, errorCallBack) {
       try {
        var soap = '<requestInfo>' +
                     '  <sessionData></sessionData>' +
                    '</requestInfo>';
        MBConnector.sendSoapRequest(MBGetistConnector.getConnector(), 'getList', soap, callback, errorCallBack);
    } catch (ex) {
       errorCallBack();
    }
};

MBGetistConnector._sendSoapRequest = function(con, xhr, action, callback, errorCallBack) {
    var root = xhr.responseXML.getElementsByTagNameNS('*' ,action + 'Response');
    if (root) {
       var listDocumentos = xhr.responseXML.getElementsByTagNameNS("*","getListResponseDocumentType")[0].children;
       var listDocumentsType = new Array();
       for(var i=0; i < listDocumentos.length; i++) {
            var document = new MBDocumentType();
            document.id = listDocumentos[i].children[0].textContent;
            document.name = listDocumentos[i].children[1].textContent;
            document.description = listDocumentos[i].children[2].textContent;
            listDocumentsType[i] = document;
        };
       callback(listDocumentsType);
    } else {
       errorCallBack();
    }
};


function MBGetPostConnector() {
}

MBGetPostConnector.getConnector = function() {
    var con = new MBConnector();
    con.endpointUrl = con.serverUrl + 'GetPost';
    con.soapDoneMethod = MBGetPostConnector._sendSoapRequest;
    return con;
};

MBGetPostConnector.getPost = function(callback, errorCallBack) {
       try {
        var soap = '<requestInfo>' +
                     '  <sessionData></sessionData>' +
                            '</requestInfo>';
        MBConnector.sendSoapRequest(MBGetPostConnector.getConnector(), 'GetLoginFail', soap, callback, errorCallBack);
    } catch (ex) {
       errorCallBack();
    }
};

MBGetPostConnector._sendSoapRequest = function(con, xhr, action, callback, errorCallBack) {
    var root = xhr.responseXML.getElementsByTagNameNS('*' ,action);
    if (root) {
       var message = root[0].children[0].textContent;
       callback(message);
    } else {
       errorCallBack();
    }
};