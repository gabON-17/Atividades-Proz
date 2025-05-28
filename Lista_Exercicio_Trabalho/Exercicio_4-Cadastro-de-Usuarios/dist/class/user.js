"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.request = void 0;
exports.request = require('prompt-sync')();
class User {
    constructor(name, idade) {
        this.name = name;
        this.idade = idade;
    }
    register(array, user) {
        array.push(user);
        return array;
    }
}
exports.User = User;
