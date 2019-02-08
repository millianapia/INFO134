function protoSpesPerson(fornavn, etternavn, fødselsdato) {
  var person = Object.create(protoSpesPerson);
  person.fornavn = fornavn;
  person.etternavn = etternavn;
  person.fødselsdato = fødselsdato;
  get.navn() {
    return person.fornavn + " " + person.etternavn;
  }
  return person;

}

person.alder = function() {
  return 2018 - this.født;
}


person.hils = function() {
  console.log("Ærede, " + this.navn + "!");
}

var elizabeth = protoSpesPerson("elizabeth", "II", 1926);