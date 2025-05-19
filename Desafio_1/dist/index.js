"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
for (let i = 1; i > 0;) {
    (0, function_1.menu)();
    let option = (0, function_1.getOption)("Digite sua opção: ", [1, 2, 3]);
    if (option == 1) {
        const data = (0, function_1.getData)();
        const pay = (0, function_1.payment)(data[0], data[1], data[2]);
        console.log("-----------");
        console.log(" Pagamento ");
        console.log("-----------");
        console.log(` R$${pay}  `);
        console.log('-----------');
    }
    else if (option == 2) {
        (0, function_1.help)();
    }
    else if (option == 3) {
        break;
    }
    else {
        console.log('Valor inválido. Digite uma opção válida');
    }
}
console.log("Obrigado por utilizar meu programa!");
