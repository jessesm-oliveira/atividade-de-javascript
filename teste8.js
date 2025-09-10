// ENCONTRAR O MAIOR NÚMERO EM UM ARRAY

let numeros = [5, 12, 8, 130, 44]; // criando uma variavel numero que recebe os valores 
let maior = numeros[0]; // criando uma variavel maior que recebe a outra variavel numero

for (let i = 1; i < numeros.length; i++) {  // usanso for para aplica a condição de verificação 
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log(`O maior número é: ${maior}`); // mostrando  o resultado da maior número 
