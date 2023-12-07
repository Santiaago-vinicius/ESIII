"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var AutomacaoDeTarefas = /** @class */ (function () {
    function AutomacaoDeTarefas() {
    }
    AutomacaoDeTarefas.prototype.moverArquivoTxt = function () {
        var origem = './arquivos';
        var destino = './arquivos2';
        var nomeArquivo = 'arquivo.txt';
        var caminhoOrigem = "".concat(origem, "/").concat(nomeArquivo);
        var caminhoDestino = "".concat(destino, "/").concat(nomeArquivo);
        // Verifica se o arquivo de origem existe
        if (fs.existsSync(caminhoOrigem)) {
            // Verifica se a pasta de destino existe, senão cria
            if (!fs.existsSync(destino)) {
                fs.mkdirSync(destino, { recursive: true });
            }
            // Move o arquivo para a pasta de destino
            fs.renameSync(caminhoOrigem, caminhoDestino);
            console.log("Arquivo ".concat(nomeArquivo, " movido de ").concat(origem, " para ").concat(destino, "."));
        }
        else {
            console.log("O arquivo ".concat(nomeArquivo, " n\u00E3o existe na pasta ").concat(origem, "."));
        }
    };
    return AutomacaoDeTarefas;
}());
// Exemplo de uso:
var automacao = new AutomacaoDeTarefas();
automacao.moverArquivoTxt();
