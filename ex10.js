// Procent składany
// capital * Math.pow( I arg, do ktorej potegi )

// capitalizacja * Math.pow( (1 +(0,04 / 12)) , (12 * 5) )

//Zmnienne potrzebne do obliczen

// capital - nasz kapitał
// rate - oprocentowanie
// n - co ile kapitalizacja
// t - na ile lat lokata

const inputCapital = document.getElementById("capital");
const inputRate = document.getElementById("rate");
const inputN = document.getElementById("n");
const inputT = document.getElementById("t");

let capital = 1000;
let rate = 0.04;
let n = 12;
let t = 5;

finalMoney = capital * Math.pow(1 + rate / n, n * t);

console.log(finalMoney);
console.log(Math.floor(finalMoney)); // zaokraglenie do dołu
console.log(Math.ceil(finalMoney)); // zaokraglenie do góry