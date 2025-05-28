import { User,request } from './class/user'

let Users: Array<User> = []
let media: number = 0
let maiorIdade: number = 0
let UserAge: User = new User('', 0)

for (let i = 0; i == 0;) {
   console.log('------------------------')
   const name: string = request('Digite seu nome: ') 
   const age: number = Number(request('Sua idade: '))
   console.clear()
   if (isNaN(age)) {
      console.log('Error. Valor inválido. Tente novamente')
      continue
   }
   if (age == 0) {
      console.log('Idade não pode ser zero. Tente novamente')
      continue
   }

   const user: User = new User(name, age)
   Users.push(user)
   const opc: string = request('Deseja continuar? [S / N] ')

   if (opc == 'S' || opc == 's') {
      continue
   } else if (opc == 'N' || opc == 'n') {
      break
   } else {
      console.log('Opção inválida. Tente novamente')
   }
}

for (let user of Users) {
   media += user['idade']
   if (user['idade'] > maiorIdade) {
      maiorIdade = user['idade']
      UserAge = user
   }
}
media /= Users.length

console.clear()
console.log('--------------------------------------------------------------------------')
console.log(`O usuário mais velho é ${UserAge['name']} com ${UserAge['idade']} anos`)
console.log(`A média de idades é ${media}`)