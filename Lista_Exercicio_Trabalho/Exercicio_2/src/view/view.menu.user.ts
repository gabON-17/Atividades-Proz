import { UserBank } from "../class/entity";
import { request } from "../utils/functions";
import { clear, title } from "./view.menu";

export const registedUsers = (list: Array<UserBank>): void => {
    clear()
    let names: string = ''
    console.log('--------------------------------------')
    console.log(`Quantidade de Usuários: ${list.length}`)
    console.log('--------------------------------------')
    console.log('Usuários:')
    for(const item of list) {
        names += item + " "
    }
    console.log(names)
}

export const menuLogin = (): [number, string] => {
    console.log('-------------------------------------')
    const cpf: number = Number(request('CPF: '))
    const password: string = request('Senha: ')
    return [cpf, password]
}


export const menuUser = (user: UserBank) => {
    clear()
    title(`BEM VINDO A SUA CONTA ${user.name}`)

    console.log(`SALDO: ${user.balance()}`)

    console.log('[1] Sacar')
    console.log('[2] Depositar')
    console.log('[3] Ver Extrato')
    console.log('[4] Sair da Conta')
    console.log('----------------------------')
}

