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
      for (var i in myObj.nodes) {
        var person = myObj.nodes[i];
        var para = document.createElement("ul");
        var count = 0;
        for (var j in myObj.edges) {
          var edge = myObj.edges[j]
          if (edge[0] == i) {
            count++;
          }
        }
        var node = document.createTextNode(person.name + " " + person.surname + " " + count + " friends");



        para.appendChild(node);
        var element = document.getElementById("myList");
        element.appendChild(para);

      }

    }
  };
  xhttp.open("GET", "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_" + netID + ".json", true);
  xhttp.send();
}