export default class Conta{
    constructor(cod,nome,extrato,transferencia,saques,tipo){
        this._cod = cod;
        this._nome = nome;
        this._saldo = 0;
        this._extrato = extrato;
        this._transferencia = transferencia;
        this._saques = saques;
        this._tipo = tipo;
        this._log = new Array();
    }

    verificaExt(){
        if(this.extrato <0 | this.tipo === 'platinum'){
            return true;
        }else{
        return false;
    }
    }

    saque(valor){
        if(valor <= this._saques || this.tipo === 'platinum'){
            this._saldo -= valor;
            this._saques -= valor;
            this.addLog(valor,'saque');
        }

        else if(this._saldo >= 0.5 & (this._saldo - 0.5) >= valor){
            this.saldo -= 0.5;
            this._saldo -= valor;
            this.addLog('-0.5','excedente');
            this.addLog(valor,'saque');
        }
        else
            console.log('Saldo insuficiente')

    }

    deposita(valor){
        this._saldo += valor;
        this.addLog(valor,'Deposito');
    }



    addLog(valor,tipo){
        let today = new Date();
        this._log.push({date: today.toLocaleString(),type: tipo,value: valor});
    }


    /*getter and setter */
    get saldo(){
        return this._saldo
    }

    get cod(){
        return this._cod;
    }

    get saques(){
        return this._saques;
    }

    get tipo(){
        return this._tipo
    }

    get transferencia(){
        return this._transferencia;
    }
    set transferencia(value){
        this._transferencia = value;
    }

    get extrato(){
        return this._extrato;
    }

    set extrato(value){
        this._extrato = value;
    } 

    get nome(){
        return this._nome;
    }

    set saldo(value){
        this._saldo = value;
    }

    get log(){
        return this._log;
    }

    set nome(valor){
        this._nome = valor;
    }
}