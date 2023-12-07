import * as fs from 'fs';

class ManipuladorDeArquivos {
    static moverArquivo(origem: string, destino: string, nomeArquivo: string): void {
        const caminhoOrigem = `${origem}/${nomeArquivo}`;
        const caminhoDestino = `${destino}/${nomeArquivo}`;

        if (fs.existsSync(caminhoOrigem)) {
            if (!fs.existsSync(destino)) {
                fs.mkdirSync(destino, { recursive: true });
            }

            fs.renameSync(caminhoOrigem, caminhoDestino);
            console.log(`Arquivo ${nomeArquivo} movido de ${origem} para ${destino}.`);
        } else {
            console.log(`O arquivo ${nomeArquivo} não existe na pasta ${origem}.`);
        }
    }
}

// Exemplo de uso:
const origem = './arquivos';
const destino = './arquivos2';
const nomeArquivo = 'arquivo.txt';

ManipuladorDeArquivos.moverArquivo(origem, destino, nomeArquivo);
