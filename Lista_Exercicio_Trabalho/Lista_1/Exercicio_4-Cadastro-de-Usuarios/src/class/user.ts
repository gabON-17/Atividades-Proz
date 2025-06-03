export const request = require('prompt-sync') ()

export class User {
   name: string;
   idade: number;

   constructor(name: string, idade: number) {
      this.name = name;
      this.idade = idade;
   }

   register(array: Array<User>, user: User): Array<User> {
      array.push(user)
      return array
   }
}