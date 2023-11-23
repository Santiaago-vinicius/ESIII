var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldoInicial) {
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    ContaBancaria.prototype.sacar = function (valor) {
        this.saldo -= valor;
    };
    ContaBancaria.prototype.getSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
var ContaPoupanca = /** @class */ (function () {
    function ContaPoupanca(saldoInicial) {
        this.conta = new ContaBancaria(saldoInicial);
    }
    ContaPoupanca.prototype.sacar = function (valor) {
        if (valor > 1000) {
            throw new Error("Não pode sacar mais de 1000 em uma poupança");
        }
        this.conta.sacar(valor);
    };
    ContaPoupanca.prototype.getSaldo = function () {
        return this.conta.getSaldo();
    };
    return ContaPoupanca;
}());
// Criando uma conta bancária e testando depósito e saque
var conta = new ContaBancaria(1000);
conta.depositar(500);
console.log('Saldo após depósito: ', conta.getSaldo()); // Saída esperada: 1500
conta.sacar(200);
console.log('Saldo após saque: ', conta.getSaldo()); // Saída esperada: 1300
// Criando uma conta poupança e testando saque
var contaPoupanca = new ContaPoupanca(2000);
try {
    contaPoupanca.sacar(1500);
}
catch (error) {
    console.log('Erro ao sacar mais de 1000: ', error.message); // Saída esperada: Erro ao sacar mais de 1000: Não pode sacar mais de 1000 em uma poupança
}
console.log('Saldo da poupança após tentativa de saque: ', contaPoupanca.getSaldo()); // Saída esperada: 2000 (sem alteração de saldo)
// Teste de saque dentro do limite
contaPoupanca.sacar(500);
console.log('Saldo da poupança após saque dentro do limite: ', contaPoupanca.getSaldo()); // Saída esperada: 1500
