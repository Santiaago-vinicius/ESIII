import { input, print } from '../../io_utils.js';

function reverseNumber(number) {
    const reversed = Number(number.toString().split('').reverse().join(''));
    return reversed;
}

function main() {
    // entrada
    const numero = Number(input('Digite um número = '));
    
    // processamento
    const inverso = reverseNumber(numero);
    
    // saida
    print(inverso);
}

main();
