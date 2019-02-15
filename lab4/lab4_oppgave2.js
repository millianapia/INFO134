console.log("Oppgave 2 a");

function parameterFunc(navn, hilsen) {
  if (arguments.length == 0) {
    console.log("Hello World!");
  } else if (navn && hilsen) {
    console.log(hilsen + " " + navn);
  } else if (navn) {
    console.log("Hello" + " " + navn);
  }

}



console.log("Oppgave 2 b");

function strangeEven(someList, numLimit, func) {
  let limit = someList.length;
  if (numLimit) {
    limit = Math.min(numLimit, someList.length);
  }

  someList = someList.slice(0, limit).filter(num => num % 2 === 0);

  if (func) {
    someList = someList.map(func);
  }

  return someList;
}

console.log(strangeEven([1, 2, 3, 4, 5, 6], 4, function(n) {
  return n - 1
}));



console.log("Oppgave 2 c");

function logArg() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(i + " " + arguments[i]);
  }
}

console.log("Oppgave 2 d");

function beskriv() {
  var result = "";
  if (bilBeskr.farge) {
    result = "den " + bilBeskr.farge + " bilen";
  } else {
    result = "Bilen";
  }

  if (bilBeskr.regNr) {
    result += "Har regnr " + bilBeskr.regNr;
    if (bilBeskr.eier) {
      result += " og eies av " + bilBeskr.eier;

    } else {
      result += ".";
    }
  } else {
    if (bilBeskr.eier) {
      result += " tilhører " + bilBeskr.eier + ".";
    } else {
      result += " finnes.";
    }
  }
}