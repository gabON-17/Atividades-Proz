export const request = require("prompt-sync")();
import { clear } from "./visual";

export function getOption(list: Array<number>): number {
  for (let i = 0; i == 0; ) {
    try {
      console.log("-------------------------------------------");
      const option: number = Number(request("Digite sua opção: "));
      clear();
      if (list.includes(option)) {
        return option;
      } else {
        console.log("Error. Opção inválida. Tente novamente");
        continue;
      }
    } catch (e) {
      if (e instanceof TypeError) {
        clear();
        console.log("-------------------------------------");
        console.log("Error. Tipo inválido. Tente novamente");
        continue;
      }
    }
  }
  return -1;
}

export function getAccount(message: string = ""): number {
  for (let i = 0; i == 0; ) {
    const account: number = Number(request(message));
    clear();
    if (isNaN(account)) {
      console.log("------------------------------------");
      console.log("Error. Valor digitado inválido. Tente novamente.");
      continue;
    } else if (account == 0) {
      console.log("------------------------------------");
      console.log("Error. Campo não pode ficar vazio. Tente Novamente.");
    } else {
      return account;
    }
  }
  return -1;
}

export function alphabeticalOrder(
  array: Array<number | string>[]
): Array<number | string>[] {
  array.sort();
  return array;
}
