// a
// simulerer museklikk, kan bruke datamus eller tastatur/touchscreen
// er enhetsuavhengig

// b

var firstButton = document.querySelector("#first");
var secondButton = document.querySelector("#second");
var thirdButton = document.querySelector("#third");


firstButton.addEventListener("click", function() {
  console.log("First button clicked");
});

function secondButtonClick() {
  console.log("Second button click");
}

thirdButton.onclick = function() {
  console.log("Third button clicked");
}


//d
// endre click til load