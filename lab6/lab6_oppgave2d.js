function freeze(tryToFreeze) {
  tryToFreeze = tryToFreeze || 4000; // standard: 4 sekunder
  var work = 30;

  // en funksjon som tar tid å bergne
  // (funksjonen regner ut det n-te tallet i Fibonacci-sekvensen)
  function workALittle(n) {
    if (n < 2) {
      return 1;
    }
    return workALittle(n - 1) + workALittle(n - 2);
  }

  // forsøk å utfør (meningsløst) arbeid i ‘tryToFreeze’ antall
  // millisekunder
  var start = performance.now();
  var timeSpent = 0;
  while (timeSpent < tryToFreeze) {
    workALittle(work);
    timeSpent = (performance.now() - start);
  }

  alert("Total time spent:" + timeSpent);
}


function myFunction() {
  myVar = setTimeout(function() {
    alert("Hello");
  }, 1000);
}
myFunction();
freeze()


// oppgave a
// enten trytofreeze eller 4000 ms

// oppgave b
// Hvis man legger til onLoad så lastet teksten inn først

// Oppgave c
// Man kan ikke det for den fryser den "threaden" den arbeider på

// Oppgave d
// For den prioriterer freeze siden den ikke skal vente imotsetning til myFunction