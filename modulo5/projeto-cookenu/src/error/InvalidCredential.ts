import { BaseError } from "./BaseError";

export class InvalidCredential extends BaseError{
    constructor(){
        super("Faltam campos para completar. Esteja ciente de que o e-mail deve ter @ e a senha deve ser maior que 6 caracteres",404)
    }
}