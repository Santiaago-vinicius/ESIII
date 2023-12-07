import * as fs from 'fs';

class AutomacaoDeTarefas {
    moverArquivoTxt() {
        const origem = './arquivos'
        const destino = './arquivos2'
        const nomeArquivo = 'arquivo.txt'

        const caminhoOrigem = `${origem}/${nomeArquivo}`;
        const caminhoDestino = `${destino}/${nomeArquivo}`;

        // Verifica se o arquivo de origem existe
        if (fs.existsSync(caminhoOrigem)) {
            // Verifica se a pasta de destino existe, senão cria
            if (!fs.existsSync(destino)) {
                fs.mkdirSync(destino, { recursive: true });
            }

            // Move o arquivo para a pasta de destino
            fs.renameSync(caminhoOrigem, caminhoDestino);
            console.log(`Arquivo ${nomeArquivo} movido de ${origem} para ${destino}.`);
        } else {
            console.log(`O arquivo ${nomeArquivo} não existe na pasta ${origem}.`);
        }
    }
}

// Exemplo de uso:
const automacao = new AutomacaoDeTarefas();
automacao.moverArquivoTxt();
