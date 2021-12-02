const readline = require('readline-sync');

const scripts = [
  { name: 'Calc imc', script: './imc.js' },
  { name: 'Calc velocidade media', script: './velocidade.js' },
  { name: 'Jogo do adivinha', script: './adivinha.js' },
];

let mensagem = scripts.map((script, index) => {
  return `${index + 1} - ${script.name}`
});

mensagem.unshift('Escolha um numero para executar o script');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Numero do script invalido! Tchau otario!')

require(script.script);

