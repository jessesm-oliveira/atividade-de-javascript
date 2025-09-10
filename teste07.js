// dado um array  em de números, calcule a soma de todos eles ( 1,2,3,4,5,6,7,8,9,10)

let numeros = [1,2,3,4,5,6,7,8,9,10]; // USANDO UMA VARIAVEL NÚMERO  PARA RECEBER OS VALORES DE 1 A 10  QUE ESTÃO DENTRO ARRAY
let soma = 0; // USANDO UMA VARIAVEL SOMA PARA FAZER A SOMA QUE RECEBE O VALOR DE 0.
for (let i = 0; i < numeros.length; i++) { // USANDO A FUNÇÃO FOR PARA REALIZAR A EXECUÇÃO
    soma += numeros[i];
}

console.log(`A soma de todos os números é: ${soma}`); // MOSTRANDO O RESULTADO NO CONSOLE 
