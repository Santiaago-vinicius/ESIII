class ContaBancaria {
    private saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      this.saldo -= valor;
    }
  
    getSaldo(): number {
      return this.saldo;
    }
  }
  
  class ContaPoupanca {
    private conta: ContaBancaria;
  
    constructor(saldoInicial: number) {
      this.conta = new ContaBancaria(saldoInicial);
    }
  
    sacar(valor: number): void {
      if (valor > 1000) {
        throw new Error("Não pode sacar mais de 1000 em uma poupança");
      }
      this.conta.sacar(valor);
    }
  
    getSaldo(): number {
      return this.conta.getSaldo();
    }
  }

// Criando uma conta bancária e testando depósito e saque
const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log('Saldo após depósito: ', conta.getSaldo()); // Saída esperada: 1500
conta.sacar(200);
console.log('Saldo após saque: ', conta.getSaldo()); // Saída esperada: 1300

// Criando uma conta poupança e testando saque
const contaPoupanca = new ContaPoupanca(2000);
try {
  contaPoupanca.sacar(1500);
} catch (error) {
  console.log('Erro ao sacar mais de 1000: ', error.message); // Saída esperada: Erro ao sacar mais de 1000: Não pode sacar mais de 1000 em uma poupança
}
console.log('Saldo da poupança após tentativa de saque: ', contaPoupanca.getSaldo()); // Saída esperada: 2000 (sem alteração de saldo)

// Teste de saque dentro do limite
contaPoupanca.sacar(500);
console.log('Saldo da poupança após saque dentro do limite: ', contaPoupanca.getSaldo()); // Saída esperada: 1500
  