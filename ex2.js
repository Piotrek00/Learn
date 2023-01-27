
//Instrukcje warunkowe

let age = 100;

// If else

// if (age >= 18) {
//     console.log(`Jesteś dorosły, masz ${age} lat.`);
// }
// else if (age < 3) {
//     console.log('Nie jesteś dorosły, jesteś dzieckiem');
// }
// else {
//     console.log('Nie jestes dorosły.')
// }

//Switch

let topSpeed = 210;

// switch (topSpeed) {
//     case 50:
//         console.log('Zabudowany?');
//         break;
//     case 180:
//     case 190:
//     case 200:
//         console.log('Autostrada')
//         break;
//     case topSpeed:
//         console.log(`Jedziesz: ${topSpeed}`)
//         break;
//     default: 
//         console.log('Jedziemy')
//     }

 let temperature = 20;

 if (temperature < 10) {
    console.log(`Zimno ! Jest ${temperature}.`);
 }
 else if (temperature > 10) {
    console.log(`Ciepło ! Jest ${temperature}`);
 }

 switch (temperature) {
    case 10: 
    console.log(`Robi się ciepło jest ${temperature}`)
    break;
    case 0:
    console.log(`Zimno, jest ${temperature}`);
    break;
    default:
    console.log(`${temperature}`)

 }