// primeiro exercicio

let a = 1
let b = 2

let soma = a + b;
console.log(soma);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao)

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

// segundo exercicio

let x = 2
let y = 1

if (x > y) {
    console.log(x)
}
else if (x < y) {
    console.log(y)
}
else {
    console.log("os numeros são iguais!")
}

// terceiro exercicio

let e = 1
let r = 2
let t = 3

if (e > r && e > t) {
    console.log(e)
}
else if (r > e && r > t) {
    console.log(r)
}
else if (t > e && t > r) {
    console.log(t)
}
else {
    console.log("não existe numero maior!")
}

// quarto exercicio

let numero;

if (numero > 0) {
    console.log("positive")
}
else if (numero < 0) {
    console.log("negative")
}
else {
    console.log("zero")
}

// quinto exercicio

let angulo1 = 170;
let angulo2 = 5;
let angulo3 = 5;
let somaAngulo = angulo1 + angulo2 + angulo3

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (angulo1 + angulo2 +angulo3 === 180) {
    console.log(true);
    } else {
    console.log(false);
    };
} else { 
    console.log("Angulo Inválido")
}
