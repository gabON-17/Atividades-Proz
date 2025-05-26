import { UserBank } from "../class/entity";
import { request } from "./validation";



export const indexUser = (
  cpf: number,
  password: string,
  list: Array<UserBank>
): number => {
  for (let item in list) {
    if (list[item].cpf == cpf && list[item].password == password) {
      return +item;
    }
  }
  return -1;
};


export const newUser = (): UserBank => {
  const name: string = request("Digite seu nome: ");
  const cpf: number = Number(request("Digite seu CPF: "));
  const password: string = request("Digite sua senha: ");

  const User: UserBank = new UserBank(name, cpf, password);

  return User;
};