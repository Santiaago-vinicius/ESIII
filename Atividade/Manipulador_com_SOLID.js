"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Arquivo = /** @class */ (function () {
    function Arquivo(nome, conteudo, caminho) {
        this.nome = nome;
        this.conteudo = conteudo;
        this.caminho = caminho;
    }
    return Arquivo;
}());
var ValidadorDeParametros = /** @class */ (function () {
    function ValidadorDeParametros() {
    }
    ValidadorDeParametros.prototype.validar = function (arquivo) {
        if (!arquivo.nome.trim() || !arquivo.conteudo.trim() || !arquivo.caminho.trim()) {
            return 'Nome, conteúdo e caminho são obrigatórios.';
        }
        return null;
    };
    return ValidadorDeParametros;
}());
var Criador = /** @class */ (function () {
    function Criador() {
        this.validador = new ValidadorDeParametros();
    }
    Criador.prototype.executar = function (arquivo) {
        var erro = this.validador.validar(arquivo);
        if (erro)
            return erro;
        try {
            fs.writeFileSync(arquivo.caminho + '/' + arquivo.nome, arquivo.conteudo);
            return "Arquivo ".concat(arquivo.nome, " criado com sucesso.");
        }
        catch (error) {
            return "Erro ao criar o arquivo ".concat(arquivo.nome, ". ").concat(error.message);
        }
    };
    return Criador;
}());
var Leitor = /** @class */ (function () {
    function Leitor() {
        this.validador = new ValidadorDeParametros();
    }
    Leitor.prototype.executar = function (arquivo) {
        var erro = this.validador.validar(arquivo);
        if (erro)
            return erro;
        try {
            var conteudo = fs.readFileSync(arquivo.caminho + '/' + arquivo.nome, 'utf-8');
            return "Conte\u00FAdo do arquivo ".concat(arquivo.nome, ": ").concat(conteudo);
        }
        catch (error) {
            return "Erro ao ler o arquivo ".concat(arquivo.nome, ". ").concat(error.message);
        }
    };
    return Leitor;
}());
var Editor = /** @class */ (function () {
    function Editor() {
        this.validador = new ValidadorDeParametros();
    }
    Editor.prototype.executar = function (arquivo) {
        var erro = this.validador.validar(arquivo);
        if (erro)
            return erro;
        try {
            fs.writeFileSync(arquivo.caminho + '/' + arquivo.nome, arquivo.conteudo);
            return "Arquivo ".concat(arquivo.nome, " editado com sucesso.");
        }
        catch (error) {
            return "Erro ao editar o arquivo ".concat(arquivo.nome, ". ").concat(error.message);
        }
    };
    return Editor;
}());
var Removedor = /** @class */ (function () {
    function Removedor() {
        this.validador = new ValidadorDeParametros();
    }
    Removedor.prototype.executar = function (arquivo) {
        var erro = this.validador.validar(arquivo);
        if (erro)
            return erro;
        try {
            fs.unlinkSync(arquivo.caminho + '/' + arquivo.nome);
            return "Arquivo ".concat(arquivo.nome, " removido com sucesso.");
        }
        catch (error) {
            return "Erro ao remover o arquivo ".concat(arquivo.nome, ". ").concat(error.message);
        }
    };
    return Removedor;
}());
var Manipulador = /** @class */ (function () {
    function Manipulador() {
    }
    Manipulador.manipular = function (operacao, arquivo) {
        return operacao.executar(arquivo);
    };
    return Manipulador;
}());
// Exemplo de uso
var arquivoExemplo = new Arquivo('meuarquivo.txt', 'Conteúdo do arquivo.', '/caminho/do/arquivo');
var criador = new Criador();
var resultado = Manipulador.manipular(criador, arquivoExemplo);
console.log(resultado);
