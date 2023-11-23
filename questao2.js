var Conta = /** @class */ (function () {
    function Conta(numeroConta, saldoInicial) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var ContaCliente = /** @class */ (function () {
    function ContaCliente(numeroConta, saldoInicial, nome, cpf, endereco) {
        this.conta = new Conta(numeroConta, saldoInicial);
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
    }
    ContaCliente.prototype.depositar = function (valor) {
        this.conta.depositar(valor);
    };
    ContaCliente.prototype.sacar = function (valor) {
        this.conta.sacar(valor);
    };
    ContaCliente.prototype.getSaldo = function () {
        return this.conta.getSaldo();
    };
    return ContaCliente;
}());
var cliente = new ContaCliente('12345', 1000, 'João', '123.456.789-00', 'Rua Principal');
cliente.depositar(500);
console.log('Saldo após depósito: ', cliente.getSaldo());
cliente.sacar(200);
console.log('Saldo após saque: ', cliente.getSaldo());
