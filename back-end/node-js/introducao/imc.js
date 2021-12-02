const readline = require('readline-sync');



const IMC = () => {
  const peso = readline.question('Qual seu peso?');
  const altura = readline.question('Qual sua altura?');
  const imc = (Number(peso) / Math.pow(Number(altura) / 100, 2)).toFixed(2);
  if(imc < 18.5) console.log('magrelo');
  if(imc >= 18.5 && imc < 24.9) console.log('normal');
  if(imc >= 24.9 && imc < 34) console.log('gordo');
}

const velocidadeMedia = () => {
  const metros = readline.question('Quantos metros de distancia? ')
  const tempo = readline.question('Quanto tempo ate la? ')
  console.log(metros / tempo)
}

IMC();
velocidadeMedia();