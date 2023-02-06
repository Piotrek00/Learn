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
const resultValue = document.getElementById("result");

// let capital = inputCapital;
// let rate = inputRate;
// let n = inputN;
// let t = inputT;

// finalMoney = capital * Math.pow(1 + rate / n, n * t);

function calculateFinal(capital, rate, n, t) {
  return capital * Math.pow(1 + rate / n, n * t);
}

document.getElementById("calculate").addEventListener("click", function () {
  let capital = inputCapital;
  let rate = inputRate;
  let n = inputN;
  let t = inputT;

  let result = calculateFinal(capital, rate, n, t);
  result = resultValue;
});

console.log(finalMoney);
console.log(Math.floor(finalMoney)); // zaokraglenie do dołu
console.log(Math.ceil(finalMoney)); // zaokraglenie do góry
