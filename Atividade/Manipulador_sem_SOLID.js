"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Manipulador = /** @class */ (function () {
    function Manipulador() {
    }
    Manipulador.manipular = function (acao, nome, conteudo, caminho) {
        if (!nome.trim() || !conteudo.trim() || !caminho.trim()) {
            return 'Nome, conteúdo e caminho são obrigatórios.';
        }
        try {
            if (acao === 'criar') {
                fs.writeFileSync(caminho + '/' + nome, conteudo);
                return "Arquivo ".concat(nome, " criado com sucesso.");
            }
            else if (acao === 'ler') {
                var conteudoArquivo = fs.readFileSync(caminho + '/' + nome, 'utf-8');
                return "Conte\u00FAdo do arquivo ".concat(nome, ": ").concat(conteudoArquivo);
            }
            else if (acao === 'editar') {
                fs.writeFileSync(caminho + '/' + nome, conteudo);
                return "Arquivo ".concat(nome, " editado com sucesso.");
            }
            else if (acao === 'remover') {
                fs.unlinkSync(caminho + '/' + nome);
                return "Arquivo ".concat(nome, " removido com sucesso.");
            }
            else {
                return 'Ação inválida.';
            }
        }
        catch (error) {
            return "Erro ao executar a\u00E7\u00E3o '".concat(acao, "' no arquivo ").concat(nome, ". ").concat(error.message);
        }
    };
    return Manipulador;
}());
// Exemplo de uso
var resultado = Manipulador.manipular('criar', 'meuarquivo.txt', 'Conteúdo do arquivo.', '/caminho/do/arquivo');
console.log(resultado);
