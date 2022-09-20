import Conta from "./Conta.js"

export default class Platinum extends Conta{
    constructor(cod,nome){
        super(cod,nome,-1,-1,-1,"platinum");
    }
}