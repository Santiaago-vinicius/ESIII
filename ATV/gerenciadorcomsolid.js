"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var ManipuladorDeArquivos = /** @class */ (function () {
    function ManipuladorDeArquivos() {
    }
    ManipuladorDeArquivos.moverArquivo = function (origem, destino, nomeArquivo) {
        var caminhoOrigem = "".concat(origem, "/").concat(nomeArquivo);
        var caminhoDestino = "".concat(destino, "/").concat(nomeArquivo);
        if (fs.existsSync(caminhoOrigem)) {
            if (!fs.existsSync(destino)) {
                fs.mkdirSync(destino, { recursive: true });
            }
            fs.renameSync(caminhoOrigem, caminhoDestino);
            console.log("Arquivo ".concat(nomeArquivo, " movido de ").concat(origem, " para ").concat(destino, "."));
        }
        else {
            console.log("O arquivo ".concat(nomeArquivo, " n\u00E3o existe na pasta ").concat(origem, "."));
        }
    };
    return ManipuladorDeArquivos;
}());
// Exemplo de uso:
var origem = './arquivos';
var destino = './arquivos2';
var nomeArquivo = 'arquivo.txt';
ManipuladorDeArquivos.moverArquivo(origem, destino, nomeArquivo);
