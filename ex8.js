// Callback

function test1() {

}

let test2 = function(){
    //funkcja anonimowa, przypisana do zmniennej tests2
}

test2();

//Definicja funkcji z callback jako argument

// function test3(a, Callback ){
//     console.log('Test 3', a);
//     Callback(a);
// }


// function test4(arg) {
//     console.log('Test 4 arg: ', arg);
// }

// test3(12, test4);

function okey(num) {
    console.log('Liczba dodatnia :', num);
}

function err(num) {
    console.log('Liczba ujemna, błąd :', num)
}

function checkNumber(n, dodatnia, ujemna) {
    if (n > 0) {
        dodatnia(n);
    }
    else {
        ujemna(n);
    }
}

checkNumber(-5, okey, err);
checkNumber(5, okey, err);

// get element by id

function buttonClicked(event) {
    console.log('Klikniety');
}

//podpiecie callback
document.getElementById('button1').addEventListener('click', buttonClicked);

document.getElementById('button2').addEventListener('click', function() {
    console.log('KLIK')
});


document.getElementById('button3').addEventListener('dblclick', function(){
    console.log('2x klik')
})