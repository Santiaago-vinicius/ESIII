import java.util.List;

class ContaCorrenteService {
    public List<Transacao> filtrarTransacoesInvalidas(List<Transacao> transacoes) {
        // Implemente a lógica para filtrar transações inválidas
        return transacoesInvalidas;
    }
}

class InvestimentoService {
    public String avaliarRisco(Investimento investimento) {
        // Implemente a lógica para avaliar o risco do investimento
        return statusRisco;
    }
}

class TransacaoService {
    public boolean verificarFraude(Transacao transacao) {
        // Implemente a lógica para verificar se a transação é fraudulenta
        return isFraudulenta;
    }
}

class ContaCorrente {
    private String numero;
    private double saldo;
    private List<Transacao> transacoes;

    public ContaCorrente(String numero, double saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public String getNumero() {
        return numero;
    }

    public double getSaldo() {
        return saldo;
    }
}

class Investimento {
    private int id;
    private double valor;
    private TipoInvestimento tipo;
    private String statusRisco;

    public Investimento(int id, double valor, TipoInvestimento tipo) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
    }

    public int getId() {
        return id;
    }

    public double getValor() {
        return valor;
    }

    public TipoInvestimento getTipo() {
        return tipo;
    }
}

class Transacao {
    private int id;
    private double valor;
    private TipoTransacao tipo;

    public Transacao(int id, double valor, TipoTransacao tipo) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
    }

    public int getId() {
        return id;
    }

    public double getValor() {
        return valor;
    }

    public TipoTransacao getTipo() {
        return tipo;
    }
}
