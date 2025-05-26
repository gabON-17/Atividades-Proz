import { UserBank } from "./class/entity";
import { getOption, request } from "./utils/validation";
import { newUser, indexUser } from "./utils/users";
import { clear, menu } from "./view/view.menu";
import { menuLogin, menuUser } from "./view/view.menu.user";

let clients: Array<UserBank> = [];

for (let i = 0; i == 0; ) {
  clear();
  const option: number = getOption([1, 2, 3], menu);

  if (option == 1) {
    clear();
    const User: UserBank = newUser();
    clients.push(User);
  } else if (option == 2) {
    clear();
    const login: [number, string] = menuLogin();
    const index: number = indexUser(login[0], login[1], clients);
    let optionUser: number = 0;
    if (index != -1) {
      const Client: UserBank = clients[index];
      for (let i = 0; i == 0; ) {
        optionUser = getOption([1, 2, 3, 4], menuUser, Client);

        if (optionUser == 1) {
          clear();
          const value: number = Number(request("Valor: R$"));
          Client.withdraw(value);
        } else if (optionUser == 2) {
          clear();
          const value: number = Number(request("Valor: R$"));
          Client.deposit(value);
        } else if (optionUser == 3) {
          clear();
          Client.viewStratum();
        } else if (optionUser == 4) {
          clear();
          break;
        } else {
          console.log("-----------------------------");
          console.log("Erro. CPF ou senha inválidos");
        }
      }
    }
  } else if (option == 3) {
    break;
  }
}

console.log("----------------------------------");
console.log("Obrigado por utilizar nosso banco!");
