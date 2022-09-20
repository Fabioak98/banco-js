import Conta from "./Conta.js"

export default class Basica extends Conta{
    constructor(cod,nome){
        super(cod,nome,3,3,1000,"basica");
    }
}