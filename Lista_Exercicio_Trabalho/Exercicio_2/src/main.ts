import { UserBank } from "./class/entity";
import { getOption, indexUser, newUser, request } from "./utils/functions";
import { clear, menu } from "./view/view.menu";
import { menuLogin, menuUser, registedUsers } from "./view/view.menu.user";

let clients: Array<UserBank> = [];

for (let i = 0; i == 0; ) {
  menu();
  const option: number = getOption([1, 2, 3]);

  if (option == 1) {
    const User: UserBank = newUser();
    clients.push(User);
  } else if (option == 2) {
    registedUsers(clients);
    const login: [number, string] = menuLogin();
    const index: number = indexUser(login[0], login[1], clients);

    if (index != -1) {
      const Client: UserBank = clients[index];
      for (let i = 0; i == 0; ) {
        menuUser(Client);
        const option: number | undefined = getOption([1, 2, 3, 4]);

        if (option == 1) {
          const value: number = Number(request("Valor: R$"));
          Client.withdraw(value);
          continue;
        } else if (option == 2) {
          const value: number = Number(request("Valor: R$"));
          Client.deposit(value);
          continue;
        } else if (option == 3) {
          const stratum: string = Client.viewStratum();
          clear();
          console.log(stratum);
          continue;
        } else if (option == 4) {
          clear()
          break;
        } else {
          console.log("Erro. CPF ou senha inválidos");
        }
      }
    }
  } else if (option == 3) {
    break;
  }
}

clear();
console.log("----------------------------------");
console.log("Obrigado por utilizar nosso banco!");
