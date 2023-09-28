import java.util.List;

class AuditoriaFinanceiraService {
    public void executar(List<Auditavel> auditaveis) {
        for (Auditavel auditavel : auditaveis) {
            auditavel.realizarAuditoria();
        }
    }
}

interface Auditavel {
    void realizarAuditoria();
}

class ContaCorrente implements Auditavel {
    // ... outras propriedades e métodos

    @Override
    public void realizarAuditoria() {
        // Lógica de auditoria para Conta Corrente...
    }
}

class Investimento implements Auditavel {
    // ... outras propriedades e métodos

    @Override
    public void realizarAuditoria() {
        // Lógica de auditoria para Investimento...
    }
}

class Transacao implements Auditavel {
    // ... outras propriedades e métodos

    @Override
    public void realizarAuditoria() {
        // Lógica de auditoria para Transacao...
    }
}
