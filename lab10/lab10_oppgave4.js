var btn = document.querySelector("#button1");
var userInput = document.querySelector("#input1");
var btn2 = document.querySelector("#button2");
var userInput2 = document.querySelector("#input2");
var userInputValue1;
var userInputValue2;

var indexValues;

btn.onclick = function() {
  userInputValue1 = userInput.value;
  lastNed(userInputValue1);
}



function lastNed(netID) {
  var xhttp1 = new XMLHttpRequest();
  var indexObj;
  xhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      indexObj = JSON.parse(this.responseText);
      for (var i in indexObj) {
        if (i === netID) {
          for (var j in indexObj[i]) {
            var btn = document.createElement("BUTTON");
            btn.innerHTML = indexObj[i][j];
            document.body.appendChild(btn);
            btn.onclick = function() {
              lastNedFraListe(btn.innerText);
            }
          }
          indexValues = indexObj[i];
        }
      }
    }
  };
  xhttp1.open("GET", "http://wildboy.uib.no/~tpe056/info134/uke9/data/names_index.json", true);
  xhttp1.send();
}



function lastNedFraListe(netID) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      for (var i in myObj.nodes) {
        var person = myObj.nodes[i];

        var para = document.createElement("p");
        var node = document.createTextNode(person.name + " " + person.surname);
        para.appendChild(node);
        var element = document.getElementById("navneListe");
        element.appendChild(para);

      }

    }
  };
  xhttp.open("GET", "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_" + netID + ".json", true);
  xhttp.send();
}