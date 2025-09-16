// CRIE UMA ARRAY DE OBJETOS REPRESENTANDO PRODUTOS (NOME, PREÇO ) E DEPOIS EXIBA O NOME DO PRODUTO MAIS CARO.

let produtos=[ // CRIANDO UMA ARRAY DE OBJETOS PRODUTOS
    {nome: "Notebook", preco: 2500}, // ATRIBUINDO NOME E PREÇO AO PRODUTO 1
    {nome: "Smartphone", preco: 1500}, // ATRIBUINDO NOME E PREÇO AO PRODUTO 2
    {nome: "Tablet", preco: 800} // ATRIBUINDO NOME E PREÇO AO PRODUTO 3
];  

let produtocaro=produtos[0]; // CRIANDO UMA VARIAVEL PARA RECEBER O PRODUTO MAIS CARO, INICIANDO COM O PRIMEIRO PRODUTO DA ARRAY

for(let i=1; i<produtos.length; i++){ // INICIANDO UM LOOP PARA VERIFICAR OS DEMAIS PRODUTOS
    if(produtos[i].preco > produtocaro.preco){ // SE O PREÇO DO PRODUTO ATUAL FOR MAIOR QUE O PREÇO DO PRODUTO CARO
        produtocaro = produtos[i]; // ATUALIZA O PRODUTO CARO
    }
}

console.log("O produto mais caro é: " + produtocaro.nome + " com o preço de R$ " + produtocaro.preco + "."); // EXIBINDO O NOME DO PRODUTO MAIS CARO