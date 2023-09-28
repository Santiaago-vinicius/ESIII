import java.util.List;

class ValidacaoImpostoDeRenda {
    public static void validarImpostoDeRenda(ImpostoDeRenda impostoDeRenda) {
        if (impostoDeRenda.getCpfContribuinte() == null || impostoDeRenda.getCpfContribuinte().isEmpty()) {
            throw new IllegalArgumentException("CPF não pode ser vazio.");
        }
        if (impostoDeRenda.getCpfContribuinte().length() != 11) {
            throw new IllegalArgumentException("CPF deve ter 11 caracteres.");
        }
        for (Double rendimento : impostoDeRenda.getRendimentos()) {
            if (rendimento < 0) {
                throw new IllegalArgumentException("Rendimento não pode ser negativo.");
            }
        }
        for (Double despesa : impostoDeRenda.getDespesas()) {
            if (despesa < 0) {
                throw new IllegalArgumentException("Despesa não pode ser negativa.");
            }
        }
        if (impostoDeRenda.getRendimentos().size() > 5) {
            throw new IllegalArgumentException("Não podem existir mais que 5 rendimentos.");
        }
    }
}

public class ImpostoDeRenda {
    private String cpfContribuinte;
    private List<Double> rendimentos;
    private List<Double> despesas;

    public ImpostoDeRenda(String cpfContribuinte, List<Double> rendimentos, List<Double> despesas) {
        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }

    public String getCpfContribuinte() {
        return cpfContribuinte;
    }

    public List<Double> getRendimentos() {
        return rendimentos;
    }

    public List<Double> getDespesas() {
        return despesas;
    }

    public void processar() {
        ValidacaoImpostoDeRenda.validarImpostoDeRenda(this);

        CalculadoraImpostoDeRenda calculadora = new CalculadoraImpostoDeRenda();
        double impostoDevido = calculadora.calcularImposto(rendimentos, despesas);
        RelatorioImpostoRenda relatorio = new RelatorioImpostoRenda();
        relatorio.gerarRelatorio(this, impostoDevido);
    }
}
