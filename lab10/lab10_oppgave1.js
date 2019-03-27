document.body.onload = function() {
  lastNed0();
  lastNed1();
}

function lastNed0() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(xhttp.responseText);
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
    }
  };

  xhttp.open("GET", "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_0.json", true);
  xhttp.send();

}



function lastNed1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
    }
  };

  xhttp.open("GET", "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_1.json", true);
  xhttp.send();

}

var btn = document.querySelector("button");
var userInput = document.querySelector("input");
var idPattern = /^\d{1,3}$/;

btn.onclick = function() {
  var userInputValue = userInput.value;
  lastNed(userInputValue);
}


function lastNed(netID) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
    }
  };

  xhttp.open("GET", "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_" + netID + ".json", true);
  xhttp.send();
}