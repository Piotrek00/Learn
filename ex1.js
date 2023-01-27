//Zmnienne

const tabela = [0, 1, 2, 3, 4, 5, 'sram', 7]
let text = "Sramy"
let $data = 123
let flag = true;
let someValue = null;

if(tabela[6] == 'sram'){
     console.log('OK zaczynamy srac');
}
else console.log(`Ni, jeszcze nie ${tabela[6]}`);

let email ={
    senderName: 'Piotr',
    senderSurname: 'Kotarba',
    senderText: `Hej, sprawdz co tam ${tabela[6]} `
}

console.log(`otrzymales maila od ${email.senderName} 
            ${email.senderSurname}, o treści ${email.senderText}`)

console.log(tabela[6])