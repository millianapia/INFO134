var btn = document.querySelector("button");
var userInput = document.querySelector("input");

btn.onclick = function() {
  var userInputValue = userInput.value;
  lastNed(userInputValue);
}


function lastNed(netID) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var tekst = "this the person: ";
      for (var i in this.nodes) {
        var person = this.nodes[i];
        tekst += "\n" + person.name + " " + person.surname;

      }
      document.getElementById("textHere").innerHTML = tekst;
    }
  };
  xhttp.open("GET", "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_" + netID + ".json", true);
  xhttp.send();
}