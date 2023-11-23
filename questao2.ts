class Conta {
    private saldo: number;
    private numeroConta: string;
  
    constructor(numeroConta: string, saldoInicial: number) {
      this.numeroConta = numeroConta;
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente.");
      }
      this.saldo -= valor;
    }
  
    getSaldo(): number {
      return this.saldo;
    }
  }
  
  class ContaCliente {
    private conta: Conta;
    private nome: string;
    private cpf: string;
    private endereco: string;
  
    constructor(
      numeroConta: string,
      saldoInicial: number,
      nome: string,
      cpf: string,
      endereco: string
    ) {
      this.conta = new Conta(numeroConta, saldoInicial);
      this.nome = nome;
      this.cpf = cpf;
      this.endereco = endereco;
    }
  
    depositar(valor: number): void {
      this.conta.depositar(valor);
    }
  
    sacar(valor: number): void {
      this.conta.sacar(valor);
    }
  
    getSaldo(): number {
      return this.conta.getSaldo();
    }
  }
  
  
  
const cliente = new ContaCliente('12345', 1000, 'João', '123.456.789-00', 'Rua Principal');

cliente.depositar(500);
console.log('Saldo após depósito: ', cliente.getSaldo()); 

cliente.sacar(200);
console.log('Saldo após saque: ', cliente.getSaldo()); 
