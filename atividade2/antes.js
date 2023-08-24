import { input, print } from '../../io_utils.js'

function main() {
    // entrada
    const numero = Number(input('Digite um número = '));
    
    // processamento
    const inverso = Number(numero.toString().split('').reverse().join(''));
    
    // saida
    print(inverso);
}

main();
