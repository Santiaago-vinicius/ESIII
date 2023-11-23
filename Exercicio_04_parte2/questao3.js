var PersistenciaImpl = /** @class */ (function () {
    function PersistenciaImpl() {
    }
    PersistenciaImpl.prototype.salvar = function (dados, arquivo) {
        console.log("Dados salvos no arquivo ".concat(arquivo, ": ").concat(dados));
    };
    return PersistenciaImpl;
}());
var PersistenciaJSON = /** @class */ (function () {
    function PersistenciaJSON(persistencia) {
        this.persistencia = persistencia;
    }
    PersistenciaJSON.prototype.salvar = function (dados, arquivo) {
        if (!dados.startsWith("{")) {
            throw new Error("Dados não estão em formato JSON.");
        }
        this.persistencia.salvar(dados, arquivo);
    };
    return PersistenciaJSON;
}());
var persistencia = new PersistenciaImpl();
var persistenciaJSON = new PersistenciaJSON(persistencia);
try {
    persistenciaJSON.salvar('{"key": "value"}', 'data.json');
    console.log('Dados salvos em formato JSON.');
}
catch (error) {
    console.log('Erro ao salvar os dados:', error.message);
}
