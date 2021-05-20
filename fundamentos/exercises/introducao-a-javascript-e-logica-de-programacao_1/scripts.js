// primeiro exercicio

let a = 1;
let b = 2;

let soma = a + b;
console.log(soma);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

// segundo exercicio

let x = 2;
let y = 1;

if (x > y) {
    console.log(x);
}
else if (x < y) {
    console.log(y);
}
else {
    console.log("os numeros são iguais!");
}

// terceiro exercicio

let e = 1;
let r = 2;
let t = 3;

if (e > r && e > t) {
    console.log(e);
}
else if (r > e && r > t) {
    console.log(r);
}
else if (t > e && t > r) {
    console.log(t);
}
else {
    console.log("não existe numero maior!");
}

// quarto exercicio

let numero;

if (numero > 0) {
    console.log("positive");
}
else if (numero < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

// quinto exercicio

let angulo1 = 170;
let angulo2 = 5;
let angulo3 = 5;
let somaAngulo = angulo1 + angulo2 + angulo3;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (angulo1 + angulo2 +angulo3 === 180) {
    console.log(true);
    } else {
    console.log(false);
    };
} else { 
    console.log("Angulo Inválido");
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

// setimo exercicio

let porcentagem = 120;

if (porcentagem < 0 || porcentagem > 100) {
  console.log("Erro");

} else if (porcentagem >=90) {
  console.log("Nota A");

} else if (porcentagem >=80) {
  console.log("Nota B");

} else if (porcentagem >= 70) {
  console.log("Nota C");

} else if (porcentagem >= 60) {
  console.log("Nota D");

} else if (porcentagem >= 50) {
  console.log("Nota E");

} else if (porcentagem < 50) {
  console.log("Nota F");

}

// oitavo exercicio

let numero1 = 1;
let numero2 = 9;
let numero3 = 3;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  console.log(true);

} else {
  console.log(false);
}

// nono exercicio

let number1 = 1;
let number2 = 9;
let number3 = 3;

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
  console.log(true);

} else {
  console.log(false);
}


// decimo exercicio

let compra = 10;
let venda = 0;
let valorCustoTotal = compra * 1.2;
let lucro = venda - valorCustoTotal;

if (compra < 0 || venda < 0) {
  console.log ("Erro");
} else {
  console.log (lucro * 1000);
}

// decimo-primeiro exercicio


let inss; 
let ir;
let bruto = 10000;

if (bruto <= 1556.94) {
  inss = bruto * 0.08;
} else if (bruto <= 2594.92) {
  inss = bruto * 0.09;
} else if (bruto <= 5189.82) {
  inss = bruto * 0.11;
} else {
  inss = 570.88;
}

let base = bruto - inss;

if (base <= 1903.98) {
  ir = 0
} else if (base <= 2826.65) {
  ir = (base * 0.075) - 142.8;
} else if (base <= 3751.05) {
  ir = (base * 0.15) - 354.8;
} else if (base <= 4664.68) {
  ir = (base * 0.225) - 636.13;
} else {
  ir = (base * 0.275) - 869.36;
};

console.log("Seu salário é: " + (base - ir));

// fim dos exercicios!