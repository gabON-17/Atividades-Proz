"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./class/user");
let Users = [];
let media = 0;
let maiorIdade = 0;
let UserAge = new user_1.User('', 0);
for (let i = 0; i == 0;) {
    console.log('------------------------');
    const name = (0, user_1.request)('Digite seu nome: ');
    const age = Number((0, user_1.request)('Sua idade: '));
    console.clear();
    if (isNaN(age)) {
        console.log('Error. Valor inválido. Tente novamente');
        continue;
    }
    if (age == 0) {
        console.log('Idade não pode ser zero. Tente novamente');
        continue;
    }
    const user = new user_1.User(name, age);
    Users.push(user);
    const opc = (0, user_1.request)('Deseja continuar? [S / N] ');
    if (opc == 'S' || opc == 's') {
        continue;
    }
    else if (opc == 'N' || opc == 'n') {
        break;
    }
    else {
        console.log('Opção inválida. Tente novamente');
    }
}
for (let user of Users) {
    media += user['idade'];
    if (user['idade'] > maiorIdade) {
        maiorIdade = user['idade'];
        UserAge = user;
    }
}
console.log(Users);
console.log(UserAge);
media /= Users.length;
console.log(media);
