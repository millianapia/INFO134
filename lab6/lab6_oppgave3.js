/*oppgave a */
/*var argument1 = {
  message: "ni hao",
  greet: function() {
    console.log(this.message);
  }
}*/


// oppgave b
var secondButton = document.querySelector("#two");

secondButton.onClick = function() {
  argument1.greet();
};

// oppgave c
/*Utvid objektet ditt med en getter-metode button som gjør som følger:
• Dersom vi allerede har en btn-egenskap: returner denne verdien.
• Ellers, opprett en knapp vha. document.createElement("button"),
lagre det i btnegenskapen på objektet og returner denne.
Sørg for at denne knappen har oppførsel når den opprettes: når knappen klikkes skal den gjøre et kall til
greet-metoden.*/


var argument1 = {
  message: "ni hao",
  greet: function() {
    console.log(this.message);
  }
  get button() {
    if (this.btn) {
      return this.btn;
    }

    this.btn =

  }
}