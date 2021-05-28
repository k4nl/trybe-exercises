
// exercicio 2 

let numero = [2, 3, 6, 7, 10, 1];

function maiorValor(numero) {
    let i = 0;
    for (let key in numero) {
        if (numero[i] < numero[key]) {
            i = key;
        }
    }
    return i;
}

console.log(maiorValor(numero));

// exercicio 3

let teste = [2, 4, 6, 7, 10, 0, -3];

function menorValor(teste) {
	let index = 0
	for (let key in teste) {
		if (teste[index] > teste[key]) {
			index = key;
		}
	}
	return index
}

console.log(menorValor(teste));

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorqtd(nomes) {
	let maiorqtd = nomes[0];
	for (let key in nomes) {
		if (maiorqtd.length < nomes[key].length) {
			maiorqtd = nomes[key];
		}
	}
	return maiorqtd
}
console.log(maiorqtd(nomes));

// exercicio 5

let inteiros = [2, 3, 2, 5, 8, 2, 3];
function repeticao (inteiros) {
	let contador = 0
	let numero = 0
	for (let key in inteiros) {
		let verifica = inteiros[key];
		for (let i in inteiros) {
			if (verifica === inteiros[i]) {
				contador += 1
			}
		}
	} if (contador > )
}


