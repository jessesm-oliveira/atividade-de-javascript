// ( BÔNUS) RECEBA UM NÚMERO E VERIFICA SE É PRIMO. 
function primo (num){ // CRIANDO A FUNÇÃO PRIMO
    if(num <=1 ) return false; // NÚMEROS MENORES OU IGUAIS A 1 NÃO SÃO PRIMOS
    for(let i=2; i<= Math.sqrt(num); i++){ // VERIFICAÇÃO DE 2 ATÉ A RAIZ QUADRADA DO NÚMERO
        if(num % i === 0){ // SE O NÚMERO FOR DIVISÍVEL POR I
            return false; // NÃO É PRIMO
        }
    } 
 return true; // SE NÃO ENCONTROU DIVISORES, É PRIMO
}
   

    console.log(primo(11))  // TESTANDO A FUNÇÃO COM O NÚMERO 11
    console.log(primo(15))  // TESTANDO A FUNÇÃO COM O NÚMERO 15
    console.log(primo(2))   // TESTANDO A FUNÇÃO COM O NÚMERO 2
    console.log(primo(1))   // TESTANDO A FUNÇÃO COM O NÚMERO 1
    console.log(primo(0))   // TESTANDO A FUNÇÃO COM O NÚMERO 0
    console.log(primo(-5))  // TESTANDO A FUNÇÃO COM O NÚMERO -5