import Conta from "./Conta.js"

export default class Estudante extends Conta{
    constructor(cod,nome){
        super(cod,nome,1,1,300,"estudante");
    }
}