// Number - typ pamiecie zmniennoprzecinkowy 64 bitowy
// poznwala na zapis liczb całkowqitych oraz dziesietnych

let a = 1; // liczba całkowita

let b = 1.234; // liczba zmiennoprzecikowa

let c = 0xf; // 15 szesnastkowa

const d = 0.45; // to to samo co 0.45

// maksymalna bezpieczna liczba  całkowita dodatnia i ujemna

console.log(Number.MAX_SAFE_INTEGER); // Kazdy typ pisany z duzej litery to obiekt dajacy nam wiele roznych metod do pracy z tym typem wartosci
console.log(Number.MIN_SAFE_INTEGER); // najwieksza max i najmniejsza min liczba całkowita

// sprawdzimy liczby powyzsze w koncoli

console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(90071992547409912)); // false
