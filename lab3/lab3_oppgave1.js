// a
"1" == 1 // True
"1" === 1 // false

//b
1 == true // true
1 === true // false
0 == false // True
0 === false // false

//c
null == undefined // True
null === undefined // false

//d
1/0 // Infinity

//e
1/0 == 1/-0 // false
1/0 === 1/-0 // false

//f
1 + "4" // = 14
1 + ("4" /2) // = 3

//g
var x = 0.3 - 0.2;
var y = 0.2 - 0.1;.

x == y; // false
x === y; // false

//h
function ifTest(x) {
  if (x) {
    return x + " er ‘truthy’.";
  } else {
    return x + " er ‘falsy’.";
  }
}

ifTest(-2); //-2 er ‘truthy’.
ifTest(-1); // -1 er ‘truthy’.
ifTest(-0); // -0 er "falsy"
ifTest(0); // -0 er "falsy"
ifTest(1); // 1 er "truthy"
ifTest(2); // 2 er "truthy"

// i
ifTest(null); // er falsy
ifTest(undefined); // er falsy
ifTest({}); // [object Object] er ‘truthy’
ifTest({}.enEgenskap); // undefined er ‘falsy’.

// k
!(false && false); // True
!(false && true); // True
!(true && false);  // True
!(true && true); // false

// L
!0 == true; // true
!0 === true; // true


// m
!null || {}; // true for !null = true og || betyr eller'

// n
!(null || {}); // false
null || !{}; // false
