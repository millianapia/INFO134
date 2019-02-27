// Oppgave a
var global;


function timerFunction() {
  global = setTimeout(function() {
    alert("Hello");
  }, 3000);

}

console.log(global);


// Oppgave b
var myVar;

function myFunction() {
  myVar = setTimeout(function() {
    alert("Hello");
  }, 3000);
}

function myStopFunction() {
  clearTimeout(myVar);
}