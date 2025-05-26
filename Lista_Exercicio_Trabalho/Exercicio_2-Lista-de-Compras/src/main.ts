import {
  alphabeticalOrder,
  getAccount,
  getOption,
  request,
} from "./view/validate";
import { clear, menu, viewItens } from "./view/visual";

let list: Array<string | number>[] = [];
clear();
console.log("-----------------------------------");
const account: number = Number(getAccount("Digite a quantidade de itens: "));

for (let i = 0; i != account; i++) {
  clear();
  console.log("--------------------------------");
  console.log(`${i + 1} ITEM`);
  const item: string = request("Item: ");
  const quant: number = Number(getAccount(`Quantidade de ${item}: `));

  list.push([item, quant]);
}

menu();
const opc: number = getOption([1, 2]);

if (opc == 1) {
  viewItens(list);
} else {
  const newList: Array<string | number>[] = alphabeticalOrder(list);
  viewItens(newList);
}
