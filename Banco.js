import Estudante from "./Estudante.js"
import Platinum from "./Platinum.js"
import Basica from "./Basica.js"


export default class Banco{
    constructor(){
        this._contas = new Array()
    }

    get contas(){
        return this._contas;
    }
    
    addConta(cod,valor,tipo){
        let nova;
        switch(tipo){
            case 'estudante':
                        nova = new Estudante(cod,valor);
                        break;
            case 'basica':
                        nova = new Basica(cod,valor);
                        break;
            case 'platinum':
                        nova = new Platinum(cod,valor);
                        break;
            default:
                alert("Tipo invalido");
        }
        this._contas.push(nova);
    }

    transferencia(codEnvia,codRec,valor){
        if(codEnvia === codRec){
            console.log('Mesma conta');
        }
        else{
            let source = this._contas.find(item => item.cod === codEnvia);
            let destination = this._contas.find(item => item.cod === codRec);
            if (source === undefined | destination === undefined){
                console.log('Codigo invalido 1');
            }
            else{
                if(source._transferencia <= 0){
                    source._saldo -= 0.5;
                    source.addLog('-0.5','excedente');
                }
                    source._saldo -= valor
                    destination.saldo +=valor;
                    source.addLog('-'+ valor,'Transferencia');
                    destination.addLog('+'+valor,'Transferencia');
                    source.transferencia--;
            }
        }
    }

    saqDep(cod,valor){
        let conta = this._contas.find(item => item.cod === cod);
        
    }

    verificaCod(cod){
        let aux = this._contas.find(item => item.cod === cod);
        if(aux === undefined){
            return true;
        }
        return false;
    }


    avancaMes(){
        let contas = this._contas;
        for(let x of contas){
            if(x.tipo === 'estudante'){
                x.trandferencia = 1;
                x.extrato = 1;
                x.saque = 300;
            }
            else if(x.tipo === "basica"){
                x.trandferencia = 3;
                x.extrato = 3;
                x.saque = 1000;
            }
        }
    }
}