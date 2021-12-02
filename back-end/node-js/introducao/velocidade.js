const readline = require('readline-sync');

const velocidadeMedia = () => {
  const metros = readline.question('Quantos metros de distancia? ')
  const tempo = readline.question('Quanto tempo ate la? ')
  const velocidadeMedia = metros / tempo
  console.log(`A velocidade media eh ${velocidadeMedia.toFixed(2)}m/s`)
}

velocidadeMedia();