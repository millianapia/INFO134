function constructCar(bokstaver, tall) {
  var newCar = Object.create(constructCar.prototype);
  newCar.bokstaverBil = bokstaver;
  newCar.tallBil = tall;
  return newCar;
}

constructCar.prototype.reg = function() {
  return this.bokstaverBil + this.tallBil;
}



/* Oppgave 2-a-d*/
/*
var methods = {
  reg: function() {
    return this.bokstaver + this.tall;
  }
}

*/