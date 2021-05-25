// Exercicio 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem-vinda, ' + info.personagem) 

// Exercicio 2

info['recorrente'] = 'Sim';
console.log(info.recorrente);

// Exercicio 3

for (let key in info) {
  console.log(key);
}

// Exercicio 4

for (let key in info) {
  console.log(info[key]);
}

// Exercicio 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for(let key in info) {
  if (
    info[key] === info.recorrente &&
    info[key] === 'Sim' &&
    info2[key] === 'Sim'
  ) {
    console.log('Ambos Recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}