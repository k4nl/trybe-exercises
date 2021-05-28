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

// ______________________________________________________________________________________________
//  exercicio 2 

// Para o segundo exercício, faça o mesmo que antes, 
// mas que imprima um triângulo retângulo com 5 asteriscos de base

let n1 = 5;
let simbolo1 = '*';
let linha1 = '';

// contando a quantidade de caracteres necessarios em cada linha (n)

for (let i = 0; i <= n1; i += 1) {
    console.log (linha1)
    linha1 = linha1 + simbolo1 
}

// exercicio 3 

let number = 5;
let symbol = '*';
let line = '';
let p = number;

for (let i = 0; i < number; i += 1) {
	for (let index = 0; index <= number; i += 1) {
		if (index < p) {
			line = line + ' ';
		} else {
			line = line + symbol;
		}
	}
	console.log(line);
	line = '';
	ṕ -= 1;
};
