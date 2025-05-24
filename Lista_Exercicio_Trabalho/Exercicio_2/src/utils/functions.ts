import readLine from 'prompt-sync';
import { UserBank } from '../class/entity';
import { clear, menu } from '../view/view.menu';

export const request = readLine()

export const newUser = (): UserBank => {
    const name: string = request('Digite seu nome: ')
    const cpf: number = Number(request('Digite seu CPF: '))
    const password: string = request('Digite sua senha: ')

    const User: UserBank = new UserBank(name, cpf, password)

    return User;
}

export const getOption = (options: Array<number>): number => {
    for(let i = 0; i == 0;) {
        try {
            const option: number = Number(request('Digite sua opção: '))

            if (options.includes(option)) {
                return option
            } else {
                clear()
                menu()
                console.log('-------------------------------------------------------')
                console.log('Valor indisponível, favor digite entre as opções certas')
            }
        }
        catch(erro) {
            if (erro instanceof TypeError) {
                clear()
                console.log('-----------------')
                throw new Error('Valor inválido')
            }
            
            if (erro instanceof KeyboardEvent) {
                clear();
                throw new Error("Campo não pode ficar vazio");
            }
        }
    }
    return -1
}

export const indexUser = (cpf:number, password: string, list: Array<UserBank>): number => {
    for(let item in list) {
        if (list[item].cpf == cpf && list[item].password == password) {
            return +item
        }
    }
    return -1
}