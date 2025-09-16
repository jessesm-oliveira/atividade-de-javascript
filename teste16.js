// verifica se uma palavras é um palíndromo
function verificarPalindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}
verificarPalindromo('arara'); // true
verificarPalindromo('desenvolvimento'); // false    