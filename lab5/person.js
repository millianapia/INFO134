function constructPerson(first, last) {
  var newPerson = Object.create(constructPerson.prototype);
  newPerson.firstName = first;
  newPerson.lastName = last;
  return newPerson;
}


/*Oppgave 2 e*/
constructPerson.prototype.name = function() {
  return this.firstName + this.lastName;
}



/* Oppgave 2-a-d*/
/*
var methods = {
  name: function() {
    return this.firstName + " " + this.lastName;
  }

}

*/