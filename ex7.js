// passing by value and reference


// let data = 10;
// let info = data; // w typach prostych takich jak liczby, mamy kopiowanie wartosci,
// console.log(data, info)

// data = 33;
// console.log(data, info) // mówimy tutaj o 2 oddzielnych miejscach w pamieci

// let obj = {
//     a: 10
// }

// let test = obj; // przypisujemy zawartosc zmniennej obj do zmienej test.
//                 // przypisując obiekt do zmniennej test, nie kopiujemy wartośc
//                 // tylko referencje. 

//                 // Zmnienne obj i test wskazują na ten sam obiekt w pamieci.

// console.log(obj.a);
// console.log(test.a);

// obj.a = 20;
// console.log(obj.a, test.a) // dowód na to ze test i obj wskazuja na to samo miejsce w pamieci


// //Typy ptoste są przekazywane przez wartość
// // czyli sa to np: string, number...

// function mojaFunkcja(a, b) {
//         a = 80;
//         return a + b;
// }

// let funkcjaA = 23;  
// let funkcjaB = 30;

// console.log(mojaFunkcja(funkcjaA, funkcjaB));  //zmieniamy tutaj wartosc a na 23, ale wracajac do działania które wykonuje funkcja, przypisujemy spowrtoem 80

// console.log(funkcjaA, funkcjaB); // tutaj widzimy ze wartosc funkcjaA jest nadal 23.

// let objA = {
//     a: 15
// }

// let objB= {
//    b: 70
// }

// function foo(obj1, obj2) {
//     objA.a = 30;
//     return objA.a + objB.b;
//     }


//     console.log(foo(objA, objB));



//     console.log( objA, objB) // waros objA została nadpisana z poziomu funkcji
//                             // obiekty nie sa przekazywane przez wartosc


// //TABLICA

//     let arrTest = [] // pusta tablica.

//     let arr = [1, 2, 3, 4, 5] /// 1 - to numer w tabli 0
//     console.log(arr[2])

//     function checkArr(arr) {
//         arr[0] = 99;  // Tablica jest obiektem więc zostanie nadpisana wartosc
//         arr.push(8);
//     }

// checkArr(arr);
// console.log(arr); 

let user = {
    userName: 'Ania',
    userSurname: 'Kowalska',
    address: {
        city: null,
        postalCode: null,
        country: null,
    }
};


function adressInput( city, postalCode, country) {

    user.address.city = city
    user.address.postalCode = postalCode
    user.address.country = country
}

adressInput(user, 'Rytro', 22343, 'Poland')
console.log(user)
