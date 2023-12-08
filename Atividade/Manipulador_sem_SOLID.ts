import * as fs from 'fs';

class Manipulador {
    static manipular(
        acao: 'criar' | 'ler' | 'editar' | 'remover',
        nome: string,
        conteudo: string,
        caminho: string
    ): string | null {
        if (!nome.trim() || !conteudo.trim() || !caminho.trim()) {
            return 'Nome, conteúdo e caminho são obrigatórios.';
        }

        try {
            if (acao === 'criar') {
                fs.writeFileSync(caminho + '/' + nome, conteudo);
                return `Arquivo ${nome} criado com sucesso.`;
            } else if (acao === 'ler') {
                const conteudoArquivo = fs.readFileSync(caminho + '/' + nome, 'utf-8');
                return `Conteúdo do arquivo ${nome}: ${conteudoArquivo}`;
            } else if (acao === 'editar') {
                fs.writeFileSync(caminho + '/' + nome, conteudo);
                return `Arquivo ${nome} editado com sucesso.`;
            } else if (acao === 'remover') {
                fs.unlinkSync(caminho + '/' + nome);
                return `Arquivo ${nome} removido com sucesso.`;
            } else {
                return 'Ação inválida.';
            }
        } catch (error: any) {
            return `Erro ao executar ação '${acao}' no arquivo ${nome}. ${error.message}`;
        }
    }
}

// Exemplo de uso
const resultado = Manipulador.manipular('criar', 'meuarquivo.txt', 'Conteúdo do arquivo.', '/caminho/do/arquivo');
console.log(resultado);
