import { clear } from "../view/view.menu";

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
            const newValue: number = this.value! - amount; 
            this.value = newValue;
            this.stract!.unshift(`Saque de R$${amount} foi feito`) 
            console.log(`R$${amount} sacado com sucesso`)
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