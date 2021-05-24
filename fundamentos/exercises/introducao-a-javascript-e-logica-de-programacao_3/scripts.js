// exercicio 1 

// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 3;
let simbolo = '*';
let linha = '';

// contando a quantidade de caracteres necessarios em cada linha (n)

for (let i = 0; i < n; i += 1) {
    linha = linha + simbolo;
}
// imprimindo as linhas de acordo com a quantidade de caracteres (n)

for (let i = 0; i < n; i += 1) {
    console.log(linha)
}