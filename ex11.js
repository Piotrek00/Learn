let data = 15;
let info = typeof data; // zwraca typ przechowywanych danych

console.log(info); // number

if (info == "number") {
  console.log("Liczba");
}

data = "tekst";

if (data == "number") {
  console.log("Liczba");
} else {
  console.log("To nie liczba");
}
// Zwracane wartosci przez typeof

console.log(typeof 20); //number
console.log(typeof "tekst"); // string
console.log(typeof "40"); // string
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof { a: 5 }); // object
console.log(typeof [0]); // object
console.log(typeof null); // OBJECT !!!!!!!!
console.log(typeof undefined); // undefined
console.log(typeof function () {}); // function
console.log(typeof Symbol()); // symbol
console.log(typeof 1n); // bigint
