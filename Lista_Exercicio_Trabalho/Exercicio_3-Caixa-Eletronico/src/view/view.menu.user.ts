import { UserBank } from "../class/entity";
import { request } from "../utils/validation";
import { clear, title } from "./view.menu";


export const menuLogin = (): [number, string] => {
    console.log('-------------------------------------')
    const cpf: number = Number(request('CPF: '))
    const password: string = request('Senha: ')
    return [cpf, password]
}


export const menuUser = (user: UserBank | undefined): void => {
    title(`BEM VINDO A SUA CONTA ${user!.name}`)

    console.log(`R$${user!.balance()}`)

    console.log('[1] Sacar')
    console.log('[2] Depositar')
    console.log('[3] Ver Extrato')
    console.log('[4] Sair da Conta')
    console.log('----------------------------')
}

