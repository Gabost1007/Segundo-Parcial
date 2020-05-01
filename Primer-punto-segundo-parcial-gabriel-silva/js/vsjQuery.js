//jQuery Selectors
var myElements = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "The text in the first paragraph is: " + myElements[0].innerHTML;

//jQuery HTML
var myElement = document.getElementById("01");
myElement.textContent = "Hello Sweden!";

//jQuery CSS
//<h2 id="01">Hello World!</h2>
//<h2 id="02">Hello Sweden!</h2>
//<h2 id="03">Hello Japan!</h2>
document.getElementById("02").style.display = "none";

//jQuery DOM
var element = document.getElementById("id01");
element.parentNode.removeChild(element);