var tipo = document.getElementsByName("rTipo");
var corrente = document.getElementById("corrente");
var poupanca = document.getElementById("poupanca");
var botaoSalvar = document.getElementById("btnSalvar");

var nomeCorrentista = document.getElementById("nomeCorrentista");
var banco = document.getElementById("banco");
var numeroConta = document.getElementById("numeroConta");
var saldoConta = document.getElementById("saldoConta");
var saldoEspecial = document.getElementById("saldoEspecial");
var juros = document.getElementById("juros");
var dataVencimento = document.getElementById("dataVencimento");

function atualizarTipo() {
    corrente.classList.toggle("d-none");
    poupanca.classList.toggle("d-none");
}

function Conta() {
    var nome;
    var banco;
    var numero;
    var saldo;

    this.getNome = function () {
        return nome;
    }

    this.setNome = function (value) {
        nome = value;
    }

    this.getBanco = function () {
        return banco;
    }

    this.setBanco = function (value) {
        banco = value;
    }

    this.getNumero = function () {
        return numero;
    }

    this.setNumero = function (value) {
        numero = value;
    }

    this.getSaldo = function () {
        return saldo;
    }

    this.setSaldo = function (value) {
        saldo = value;
    }

}

function Corrente() {

    var saldoEspecial;

    this.getSaldoEspecial = function () {
        return saldoEspecial;
    }

    this.setSaldoEspecial = function (value) {
        saldoEspecial = value;
    }

}

function Poupanca() {

    var juros;
    var dataVencimento;

    this.getJuros = function () {
        return juros;
    }

    this.setJuros = function (value) {
        juros = value;
    }

    this.getDataVencimento = function () {
        return dataVencimento;
    }

    this.setDataVencimento = function (value) {
        dataVencimento = value;
    }

}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

botaoSalvar.addEventListener("click", () => {

    if (tipo[0].checked) { // Corrente:
        var c = new Corrente();
        c.setNome(nomeCorrentista.value);
        c.setBanco(banco.value);
        c.setNumero(numeroConta.value);
        c.setSaldo(saldoConta.value);
        c.setSaldoEspecial(saldoEspecial.value);

        mensagem =
            `Conta: Corrente\n
            Nome: ${c.getNome()}
            Banco: ${c.getBanco()}
            Número da Conta: ${c.getNumero()}
            Saldo: ${c.getSaldo()}
            Saldo Especial: ${c.getSaldoEspecial()}
        `;

    } else { // Poupança:

        var p = new Poupanca();
        p.setNome(nomeCorrentista.value);
        p.setBanco(banco.value);
        p.setNumero(numeroConta.value);
        p.setSaldo(saldoConta.value);
        p.setJuros(juros.value);
        p.setDataVencimento(dataVencimento.value);

        mensagem =
            `Conta: Poupança\n
            Nome: ${p.getNome()}
            Banco: ${p.getBanco()}
            Número da Conta: ${p.getNumero()}
            Saldo: ${p.getSaldo()}
            Juros: ${p.getJuros()}
            Data de Vencimento: ${p.getDataVencimento()}
        `;
    }

    alert(mensagem);
})