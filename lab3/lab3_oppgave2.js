var o1 = {
  bokstaver: "EL",
  tall: 12345,
}

var o2 = {
  bokstaver: 'EL',
  tall: 12345,
  get regNr() {
    return this.bokstaver + this.tall;
  }
}



var p = {
  fornavn: "Malin",
  etternavn: "Jakobsen",
  get navn() {
    return this.fornavn + this.etternavn;
  }
}
var p2 = {
  fornavn: "Nilam",
  etternavn: "Jakobsen",
  get navn() {
    return this.fornavn + this.etternavn;
  }
}

var p3 = {
  fornavn: "Minz",
  etternavn: "Jakobsen",
  get navn() {
    return this.fornavn + this.etternavn;
  }
}

var fam = [p, p2, p3];
for (i = 0; i < fam.length; i++) {
  console.log(fam[i].navn);
}


// fornavn og etternavn er ikke definert, så blir undefined undefined
var protoPerson = {
  get navn() {
    return this.fornavn + " " + this.etternavn;
  }
}

var ola = Object.create(protoPerson);
ola.fornavn = "Ola";
ola.etternavn = "Nielsen";
ola.navn;


//  Fullfør programmet under. Programmet skal skrive ut fire linjer med tekst: Ole Nielsen, Kari Nielsen, Mor Nielsen, og Far Nielsen. (Strengt talt kan rekkefølgen variere.)


function person(fornavn, etternavn) {
  var person = Object.create(protoPerson);
  person.fornavn = fornavn;
  person.etternavn = etternavn;
  return person;
}

var familie = {
  ola: person("Ola", "Nielsen"),
  kari: person("Kari", "Nielsen"),
  mor: person("Mor", "Nielsen"),
  far: person("Far", "Nielsen")
};

protoPerson.hils = function() {
  console.log("Hei, " + this.navn + "!");
}

for (var nøkkel in familie) {
  var verdi = familie[nøkkel];
  console.log(verdi.navn);
}

/*
variabelen familie?


variabelen ola dersom vi lar var ola = familie["ola"];)?


variabelen protoPerson?

*/