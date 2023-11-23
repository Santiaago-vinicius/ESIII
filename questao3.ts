interface Persistencia {
    salvar(dados: string, arquivo: string): void;
  }
  
  class PersistenciaImpl implements Persistencia {
    salvar(dados: string, arquivo: string): void {
      console.log(`Dados salvos no arquivo ${arquivo}: ${dados}`);
    }
  }
  
  class PersistenciaJSON {
    private persistencia: Persistencia;
  
    constructor(persistencia: Persistencia) {
      this.persistencia = persistencia;
    }
  
    salvar(dados: string, arquivo: string): void {
      if (!dados.startsWith("{")) {
        throw new Error("Dados não estão em formato JSON.");
      }
      this.persistencia.salvar(dados, arquivo);
    }
  }
  
  const persistencia = new PersistenciaImpl();
  const persistenciaJSON = new PersistenciaJSON(persistencia);
  
  try {
    persistenciaJSON.salvar('{"key": "value"}', 'data.json');
    console.log('Dados salvos em formato JSON.');
  } catch (error) {
    console.log('Erro ao salvar os dados:', error.message);
  }
  