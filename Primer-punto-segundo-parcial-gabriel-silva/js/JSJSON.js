//JSON Syntax
var myObj, x;
myObj = { name: "John", age: 30, city: "New York" };
myObj["name"] = "Gilbert";
document.getElementById("demo").innerHTML = myObj.name;

//JSON vs XML
{"employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}

//JSON Data Types
{
"employee":{ "name":"John", "age":30, "city":"New York" }
} 

//JSON Parse
var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 

//JSON Stringify
var arr = [ "John", "Peter", "Sally", "Jane" ];
var myJSON = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myJSON;

//JSON Objects
var myObj, x;
myObj = {"name":"John", "age":30, "car":null};
for (x in myObj) {
  document.getElementById("demo").innerHTML += myObj[x] + "<br>";
}

//JSON Arrays
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ]
 } 

 //JSON HTML
 var obj, dbParam, xmlhttp, myObj, x, txt = "";
	obj = { table: "customers", limit: 20 };
	dbParam = JSON.stringify(obj);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    myObj = JSON.parse(this.responseText);
	    txt += "<select>"
	    for (x in myObj) {
	      txt += "<option>" + myObj[x].name;
	    }
	    txt += "</select>"
	    document.getElementById("demo").innerHTML = txt;
	  }
	};
	xmlhttp.open("POST", "json_demo_db_post.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("x=" + dbParam);

