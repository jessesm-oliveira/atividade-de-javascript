// ESCREVA UM PROGRAMA QUE CONTE DE 1 A 100 E:
// - SE O NÚMERO FOR DIVISÍVEL POR 3, EXIBA "BATATA".
// - SE O NÚMERO FOR DIVISÍVEL POR 5, EXIBA "QUENTE".
// - SE O NÚMERO FOR DIVISÍVEL POR 3 E 5, EXIBA "BATATAQUENTE".

for(let i=1; i<=100; i++){ // INICIANDO UM LOOP DE 1 A 100
    if(i % 3 === 0 && i % 5 === 0){ // SE O NÚMERO FOR DIVISÍVEL POR 3 E 5
        console.log("BATATAQUENTE"); // EXIBE "BATATAQUENTE"
    } else if(i % 3 === 0){ // SE O NÚMERO FOR DIVISÍVEL POR 3
        console.log("BATATA"); // EXIBE "BATATA"
    } else if(i % 5 === 0){ // SE O NÚMERO FOR DIVISÍVEL POR 5
        console.log("QUENTE"); // EXIBE "QUENTE"
    } else {
        console.log(i); // SE NÃO FOR DIVISÍVEL POR NENHUM, EXIBE O PRÓPRIO NÚMERO
    }
}