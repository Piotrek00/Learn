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
  personName: "Piotr",
  personSurname: "Kotarba",
  personAge: 29,
  adress: {
    town: "Rytro",
    postalCode: 33 - 343,
    country: "Poland",
  },
  getName: function () {
    console.log(
      "Dane uzytkownika: ",
      this.personName + " ",
      this.personSurname
    );
  },
  getAdress: function () {
    console.log(person.adress);
  },
};

person.getName();
person.getAdress();

function getNewPerson(personName, personSurname, personAge) {
  return {
    name: personName,
    surname: personSurname,
    age: personAge,
  };
}

const user = getNewPerson("Ania", "Kowalska", 29);
console.log(user);
