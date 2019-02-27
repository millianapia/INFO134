// oppgave 1 c

var firstButton = document.querySelector("#first");
var secondButton = document.querySelector("#second");


firstButton.addEventListener("click", function() {
  secondButton.addEventListener("click", function() {
    console.log("second button activated");
  });
});