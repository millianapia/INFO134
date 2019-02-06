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
    return this.fornavn + this.etternavn;
  }
}

var ola = Object.create(protoPerson);
ola.fornavn = "Ola";
ola.etternavn = "Nielsen";

var protoPerson = // fra 3.a)

  function person(fornavn, etternavn) {
    // opprett objekt som har protoPerson som prototype
    // ved hjelp av Object.create-metoden
    // gi deretter objektet egenskaper ‘fornavn’ og ‘etternavn’
    // returner objektet
  }

var familie = {
  ola: person("Ola", "Nielsen"),
  kari: person("Kari", "Nielsen"),
  mor: person("Mor", "Nielsen"),
  far: person("Far", "Nielsen")
};

for (var nøkkel in familie) {
  var verdi = familie[nøkkel];
  console.log(verdi.navn);
}