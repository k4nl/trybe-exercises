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

// sexto exercicio

let peca = "rei";

switch (peca.toLowerCase()) {
  case "rei":
    console.log("O rei só pode andar uma casa e para qualquer direção.");
    break;

  case "rainha":
    console.log("A rainha pode andar quantas casas quiser e para qualquer direção.");
    break;

  case "bispo":
    console.log("O bispo pode andar quantas casas quiser mas somente na diagonal.");
    break;

  case "peão":
  console.log("O peão so pode andar uma casa mas somente para frente, exceto quando for eliminar uma peça inimiga e na primeira rodada, quando ele pode andar duas casas para frente.");
  break;

  case "torre":
    console.log("A torre pode andar quantas casas quiser mas somente de forma vertical e horizontal.");
    break;

  case "cavalo":
    console.log("O cavalo anda em L, ou seja, duas casas para qualquer direção e depois mais uma em sentido perpendicular. É a única peça que pode saltar sobre as outras.");
    break;

  default:
    console.log("Erro, peça não encontrada!")
    break;
}
