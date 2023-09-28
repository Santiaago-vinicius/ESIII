import java.util.ArrayList;
import java.util.List;

public interface Operacao {
    double executar(double a, double b);
}

public class Soma implements Operacao {
    @Override
    public double executar(double a, double b) {
        return a + b;
    }
}

public class Subtracao implements Operacao {
    @Override
    public double executar(double a, double b) {
        return a - b;
    }
}

public class Calculadora {
    private final double a;
    private final double b;

    public Calculadora(double a, double b) {
        this.a = a;
        this.b = b;
    }

    public List<Double> calcular(List<Operacao> operacoes) {
        List<Double> resultados = new ArrayList<>();
        for (Operacao operacao : operacoes) {
            resultados.add(operacao.executar(a, b));
        }
        return resultados;
    }
}
