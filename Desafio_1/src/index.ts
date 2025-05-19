import { getData, payment, help, menu, getOption } from "./function";

for (let i: number = 1; i > 0; ) {
  menu();
  let option = getOption("Digite sua opção: ", [1, 2, 3]);
  if (option == 1) {
    const data: Array<number> = getData();
    const pay: number = payment(data[0], data[1], data[2]);

    console.log("-----------");
    console.log(" Pagamento ");
    console.log("-----------");
    console.log(` R$${pay}  `);
    console.log('-----------')
  } else if (option == 2) {
    help();
  } else if (option == 3) {
    break;
  } else {
    console.log('Valor inválido. Digite uma opção válida')
  }
}

console.log("Obrigado por utilizar meu programa!");
