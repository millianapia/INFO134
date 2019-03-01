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


// Oppgave c 1
var elt = document.getElementById("avsnittetMitt");
elt.innerHTML = "Siden er lastet."
// Man henter det innerste tekstelementet til elt, som er id avsnittetMitt, og endrer
// det til Siden er lastet. Kan og sende inn html "kode"

// Oppgave c 2
// Hvis du kobler det mot load og klikk så gjør de det på load og klikk