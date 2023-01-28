// Obiekty

// let car1 = {
//     brand: 'Chevrolet',
//     model: 'Camaro',
//     year: 1997,
// };

// console.log(car1.brand, car1.model, car1.year)

// let rocket = {
//     brand: 'SpaceX',
//     model: 'Falcon',
//     topSpeed: 30000,

//     printInfo: function() {
//         console.log(this.brand, this.model, this.topSpeed);
//     },   

//     printTopSpeed: function() {
//         console.lot('Maksymalna prędkość to: ', this.topSpeed);
//     }
// };

// rocket.printInfo();


//EXERCISES

let person = {
    personName: 'Piotr',
    personSurname: 'Kotarba',
    personAge: 29,
    town: 'Rytro',
    postalCode: 33-343,
    country: 'Poland',

    getName: function(){
        console.log('Dane uzytkownika: ', this.personName + ' ', this.personSurname)
    }
}

person.getName();