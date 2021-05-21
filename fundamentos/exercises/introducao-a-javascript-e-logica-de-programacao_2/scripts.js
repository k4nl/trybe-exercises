let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// exercicio 2
let soma = 0

for (let i = 0; i < numbers.length; i += 1) {
  soma = numbers[i] + soma;
}
console.log(soma)

// exercicio 3

let somatorio = 0

for (let i = 0; i < numbers.length; i += 1) {
  somatorio = numbers[i] + somatorio;
}
console.log(somatorio / numbers.length)

// exercicio 4

if (( somatorio / numbers.length) > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20")
}

// exercicio 5

let maiorNumero = numbers[0]

for (let i = 0; i < numbers.length; i+= 1) {
  if ((maiorNumero < numbers[i])) {
    maiorNumero = numbers[i];
  }
}
console.log(maiorNumero);

// exercicio 6

let contador = 0;

for (let i = 0; i < numbers.length; i+=1) {
  if (numbers[i] % 2 !== 0){
    contador += 1;
  }
}

if (contador > 0) {
  console.log(contador);
} else {
  console.log("nenhum valor ímpar encontrado");
}

// exercicio 7

let menorNumero = numbers[0]

for (let i = 0; i < numbers.length; i+= 1) {
  if ((numbers[i] < menorNumero)) {
    menorNumero = numbers[i];
  }
}
console.log(menorNumero);

// exercicio 8
// exercicio 9


