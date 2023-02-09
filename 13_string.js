//String

// Literały znakowe lub łańcuchowe - ciag znaków UTF-16

const text = "apostrofy";

const text2 = `backtick

String w wielu liczbach 
+ zmnienne ${text} 
+ ${1 + 2 + 3}

`; // literał szablonu !
console.log(text2);

console.log("tekst".length); // długość znaków w string

console.log("tekst"[2]); // odwolanie sie do znaku po indeksie

console.log(text2.charAt(2)); // charakter at

console.log(text2.charCodeAt(2)); // 99 - unicode

// wyszukiwanie słów znakow w tekscie

let simpleText = "Ania ma kota a Kasia ma psa";

let pos = simpleText.indexOf("Ania"); // wyszukiwanie indexu dla Ania
console.log("Index dla Ania to: " + pos);

let pos2 = simpleText.lastIndexOf("ma"); // wyszukiwanie ostatniego indexu dla ma
console.log("Ostatni index dla ma to : " + pos2);

// trim - metroda ktora wycina białe znaki z poczatku i konca tekstu. Np przy wprowadzaniu haseł

console.log("   Tekst cos tam     ".trim());

console.log("Ala".toUpperCase()); // duze liter

console.log("AUTO".toLowerCase()); // male litery

// Łaczenie łncuchow znakow

const str1 = "blabla";
const str2 = " lalala";
const resultString = "tekst" + str1 + str2;
console.log(resultString);
