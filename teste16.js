// verifica se uma palavras é um palíndromo
function verificarPalindromo(palavra) { // CRIANDO UMA FUNÇÃO QUE RECEBE UMA PALAVRA
    const palavraInvertida = palavra.split('').reverse().join(''); // INVERTENDO A PALAVRA
    return palavra === palavraInvertida; // RETORNANDO SE A PALAVRA É IGUAL A PALAVRA INVERTIDA (VERDADEIRO OU FALSO)
}
verificarPalindromo('arara'); // true
verificarPalindromo('desenvolvimento'); // false

console.log(verificarPalindromo('desenvolvimento')) //  CHAMANDO A FUNÇÃO E MOSTRANDO O RESULADO SE É VERDADEIRO OU FALSO.
console.log(verificarPalindromo('arara')) //  CHAMANDO A FUNÇÃO E MOSTRANDO O RESULADO SE É VERDADEIRO OU FALSO.
console.log(verificarPalindromo('radar')) //  CHAMANDO A FUNÇÃO E MOSTRANDO O RESULADO SE É VERDADEIRO OU FALSO.