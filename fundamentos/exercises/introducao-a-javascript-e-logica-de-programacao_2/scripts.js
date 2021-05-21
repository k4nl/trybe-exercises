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







