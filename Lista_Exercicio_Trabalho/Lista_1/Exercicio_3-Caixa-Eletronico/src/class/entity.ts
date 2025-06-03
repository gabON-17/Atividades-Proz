import { clear } from "../view/view.menu";
import  { moneyNote } from '../utils/functions'

export class UserBank {
    name: string;
    cpf: number;
    password: string;
    private value?: number;
    protected stract?: Array<string>

    constructor(name: string, cpf: number, password: string) {
        this.name = name;
        this.cpf = cpf;
        this.password = password;
        this.value = 0;
        this.stract = []
    }

    withdraw(amount: number): void {
        if (this.value! < amount) {
            console.log(`ERROR. Saldo dísponivel igual a ${this.value}`)
        } else {
            this.value! -= amount;
            this.stract!.unshift(`Saque de R$${amount} foi feito`) 
            
            const notes: Array<number> = moneyNote(amount)
            console.log('TOTAL DE NOTAS SACADAS: ')
            console.log(`R$100 = ${notes[0]}`)
            console.log(`R$50  = ${notes[1]}`)
            console.log(`R$20  = ${notes[2]}`)
            console.log(`R$10  = ${notes[3]}`)
            console.log(`R$2   = ${notes[4]}`)
        }
    }

    deposit(amount: number): void {
        this.value! += amount
        this.stract!.unshift(`Depósito feito de R$${amount}`)
        console.log(`R$${amount} depositado com sucesso`)
    }

    async viewStratum(): Promise<void> {
        clear()
        console.log(this.stract)
    }

    balance(): number {
        return this.value!
    }
}