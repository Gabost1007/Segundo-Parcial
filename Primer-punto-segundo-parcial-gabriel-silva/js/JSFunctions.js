//FunctionDefinitions
var x = function (a, b) {return a * b};
document.getElementById("FunctionDefinitions").innerHTML = x(4, 3);

//FunctionParameters
function sumAll() {
  var i;
  var sum = 0;
  for(i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
document.getElementById("FunctionParameters").innerHTML = sumAll(1, 123, 500, 115, 44, 88);

//FunctionInvocation
var myObject = {
  firstName:"Jhon",
  lastName: "Gabriel",
  fullName: function() {
    return this;
  }
}
document.getElementById("FunctionInvocation").innerHTML = myObject.fullName();

//FunctionCall
var persona = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"Jhon",
  lastName: "Gabriel"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
var x = person.fullName.call(person1, "Oslo", "Norway"); 
document.getElementById("FunctionCall").innerHTML = x; 

//Function Apply
var persona = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"Jhon",
  lastName: "Gabriel"
}
var x = person.fullName.apply(person1, ["Oslo", "Norway"]); 
document.getElementById("FunctionApply").innerHTML = x; 

//Function Closures
function add() {
  var counter = 0;
  counter += 1;
  return counter;
}
function myFunction(){
  document.getElementById("FunctionClosures").innerHTML = add();
}




