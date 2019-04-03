var input1 = document.querySelector("#one");
var input2 = document.querySelector("#two");
var btn = document.querySelector("button");
var myObj;

btn.onclick = function() {
  var userInputValue1 = input1.value;
  var userInputValue2 = input2.value;
  lastNedFraListe(userInputValue1, userInputValue2);
  lastOpp(userInputValue1, userInputValue2);
}

function lastNedFraListe(tall1, tall2) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      console.log(myObj[tall1 + "+" + tall2]);
    }
  };
  xhttp.open("GET", getURL(tall1, tall2), true);
  xhttp.send();
}


function lastOpp(num1, num2) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://nelson.uib.no/info134demo/addition/", true);
  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log(this.responseText);
    }
  }
  xhr.send(JSON.stringify(createJSON(num1, num2)));
}


function createJSON(num1, num2) {
  return {
    "first": num1,
    "second": num2
  }

}


function getURL(tall1, tall2) {
  var URL = "https://nelson.uib.no/info134demo/addition/" + tall1 + "/" + tall2 + "/";
  return URL;
}