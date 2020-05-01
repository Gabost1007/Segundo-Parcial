//Ajax Xmlhttp
function loadDoc() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("AjaxXmlhttp").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

//Ajax Request
function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("AjaxRequest").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
  xhttp.send();
}

//Ajax Response
function loadDoc3(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("AjaxResponse").innerHTML =
  xhttp.responseText;
}

//Ajax Xml File
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("AjaxXmlFile").innerHTML = table;
}

//Ajax PHP
function showHint(str) {
  var xhttp;
  if (str.length == 0) { 
    document.getElementById("AjaxPHP").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("AjaxPHP").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "gethint.php?q="+str, true);
  xhttp.send();   
}

//Ajax Database
function showCustomer(str) {
  var xhttp; 
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("Database").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "getcustomer.php?q="+str, true);
  xhttp.send();
}
