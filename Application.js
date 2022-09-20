import Banco from "./Banco.js";

/*menu*/
const cadBtt = document.getElementById('criaConta');
const transf = document.getElementById('fazTransf');
const sacaDep = document.getElementById('sacaDep');
const retExtra = document.getElementById('retExtr');
const avMes = document.getElementById('avMes');

/*telas*/
const displayCadastro = document.getElementById("cadastro");
const displayTransf = document.getElementById('transferencia');
const displaySaq = document.getElementById('saqDep');
const displayExt = document.getElementById('extrato');
const displays = document.getElementsByClassName('display');

/*cadastro*/
const cadOk = document.getElementById('cadButton');

/*transferencia*/
const transfOk = document.getElementById('transfBtt');

/*saque e deposito*/
const saqOk = document.getElementById('sdBtt');
const saqRadio = document.getElementById('saqRadio');
const depRadio = document.getElementById('depRadio');

/*extrato*/
const extrBtt = document.getElementById('extOK');
const historico = document.getElementById('historico');

let banco = new Banco();


cadBtt.addEventListener('click',()=>
{
    clean();
    displayCadastro.style.display = "block";
})

transf.addEventListener('click',()=>
{
    clean();
    displayTransf.style.display = "block";
})

sacaDep.addEventListener('click',()=>
{
    clean();
    displaySaq.style.display = "block";
})

retExtra.addEventListener('click',()=>
{
    clean();
    displayExt.style.display = "block";
})

cadOk.addEventListener('click',()=>
{
    let cod = document.getElementById('cadCod').value;
    let nome = document.getElementById('cadValor').value;
    let tipo = document.getElementById('cadTipo').value;
    if(banco.verificaCod(cod)){
        banco.addConta(cod,nome,tipo);
    }
    else
        alert('Codigo invalido');
})

avMes.addEventListener('click',()=>
{
    banco.avancaMes();
    alert("Reiniciado");
})

transfOk.addEventListener('click',()=>{
    let source= document.getElementById('ccodOrigem').value;
    let destination = document.getElementById('ccodDestino').value;
    let value = document.getElementById('transfValor').value;
    banco.transferencia(source,destination,value);
})

saqOk.addEventListener('click',()=>{
    let cod = document.getElementById('sdcodOrigem').value;
    let valor = document.getElementById('sdValor').value;
    let conta = banco.contas.find(conta=> conta.cod === cod);
    if(saqRadio.checked && conta !== undefined){
        let conta = banco.contas.find(conta=> conta.cod === cod);
        conta.saque(valor);
    }
    else if(conta !== undefined){
        conta.deposita(valor);
    }
})

extrBtt.addEventListener('click',()=>
{
    let cod = document.getElementById('extCod').value;
    let conta = banco._contas.find(item => item.cod === cod);
    if(conta.extrato <= 0){
        conta.saldo -= 0.5;
        conta.addLog('-0.5','excedente');
    }
    historico.innerHTML = '';
    loadExtrato(conta);
    conta._extrato--;
})


function loadExtrato(conta){
    let extrato = conta.log;
    extrato.forEach(item =>{
        let linha = historico.insertRow();
        let data = linha.insertCell(0);
        data.innerHTML = item.date;
        let tipo = linha.insertCell(1);
        tipo.innerHTML = item.type;
        let value = linha.insertCell(2);
        value.innerHTML = item.value;
    })
}

function clean(){
    for( let x of displays){
        x.style.display = 'none';
    }
}

