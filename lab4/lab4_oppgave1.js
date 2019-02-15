// 1a
console.log("Task 1a")

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.toString = function() {
  return this.firstname + " " + this.lastname;
}

let p1 = new Person("Peter", "1");
let p2 = new Person("Peter", "2");
let fam = [p1, p2];

for (personID in fam) {
  let personObj = fam[personID];
  console.log(personObj.toString());
}

let numbers = [0, 1, 2, 3, 4, 6];
for (numIndex in numbers) {
  console.log(numbers[numIndex]);
}

// 1b+c+d
console.log("\nTask 1b+c+d")

function printSumInnerFor(someList) {
  console.log("Simple for-loop:")
  for (numListIndex in someList) {
    let total = someList[numListIndex].reduce((a, b) => a + b);
    console.log(total);
  }
  console.log("\n")
}

function printSumInnerWhile(someList) {
  console.log("while-loop:");
  let counter = 0;
  while (counter < someList.length) {
    let total = someList[counter].reduce((a, b) => a + b);
    console.log(total);
    counter++;
  }
  console.log("\n");
}

function printSumInnerOldFor(someList) {
  console.log("Regular for-loop:")
  for (let i = 0; i < someList.length; i++) {
    let total = someList[i].reduce((a, b) => a + b);
    console.log(total);
  }
  console.log("\n");
}

let numListA = [
  [1, 2],
  [3, 4],
  [5, 6]
];
let numListB = [
  [1, 1],
  [1, 2],
  [2, 3],
  [3, 5],
  [5, 8],
  [8, 13]
];

printSumInnerFor(numListA);
printSumInnerFor(numListB);

printSumInnerWhile(numListA);
printSumInnerWhile(numListB);

printSumInnerOldFor(numListA);
printSumInnerOldFor(numListB);

// 1d