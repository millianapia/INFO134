let teller = {
  counter: 3,

  onchange(nyVerdi) {
    let btn = document.querySelector("#myButton");
    btn.innerHTML = nyVerdi;
  },

  onzero() {
    if (this.counter === 0) {
      let btn = document.querySelector("#myButton");
      btn.disabled = true;
    }
  },

  tick() {
    if (this.counter === 0) return;
    this.counter -= 1;
    if (this.onchange) {
      this.onchange(this.counter);
    }
    if (this.onzero) {
      this.onzero();
    }

    // return this.counter;
  }
}

let btn = document.querySelector("#myButton");
btn.addEventListener("click", function() {
  teller.tick();
});