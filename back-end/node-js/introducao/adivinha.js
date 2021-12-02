const readline = require('readline-sync');

const adivinha = () => {
  const sorteado = Math.round(Math.random() * 10);
  const escolhido = readline.question('Qual numero vc escolhe? ');
  console.log(`O numero que vc escolheu foi o ${escolhido} e o numero sortedo foi o ... ${sorteado}`);
  const novamente = readline.question('Deseja jogar novamente? digite s para sim ......')
  if (novamente === 's') return adivinha();
}

adivinha();