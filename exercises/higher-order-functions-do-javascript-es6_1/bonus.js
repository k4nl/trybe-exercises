const mage = {
  healthPoints: 130, // 137 é o mais equilibrado
  intelligence: 45,
  mana: 125,
  cajado: 2, // entre 45 e 90
  cajadoCritico: 4, // 12 e 180
  damage: undefined,
}
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);
const warriorDamage = () => Math.floor(Math.random() * (warrior.strength - warrior.strength * warrior.weaponDmg) + warrior.strength * warrior.weaponDmg);
const mageDamage = () => {
  const damageMana = {
    critico: Math.floor(Math.random() * (mage.intelligence * mage.cajadoCritico - mage.intelligence) + mage.intelligence / 3),
    dano: Math.floor(Math.random() * (mage.intelligence * mage.cajado - mage.intelligence) + mage.intelligence),
    mana: mage.mana -= 15,
  }
  if (damageMana.mana <= 15) {
    damageMana.mana = 'Não possui mana suficiente';
    damageMana.dano = 0;
  }
  return damageMana;
}
const battleMembers = { mage, dragon };
const gameActions = {
  warriorTurn: (callbackWarrior) => {
    const warriorTurnDamage = callbackWarrior();
    dragon.healthPoints -= warriorTurnDamage;
    warrior.damage = warriorTurnDamage;
  },
  mageTurn: (a, callbackMage) => {
    const mageTurnDamage = callbackMage();
    if (a === 'cajado') {
    dragon.healthPoints -= mageTurnDamage.dano;
    mage.damage = mageTurnDamage.dano;
    mage.mana = mageTurnDamage.mana;
    } if (a === 'critico') {
      dragon.healthPoints -= mageTurnDamage.critico;
      mage.damage = mageTurnDamage.critico;
      mage.mana = mageTurnDamage.mana;
    }
  },
  dragonTurn: (callbackDragon) => {
    const dragonTurnDamage = callbackDragon();
    warrior.healthPoints -= dragonTurnDamage;
    mage.healthPoints -= dragonTurnDamage;
    dragon.damage = dragonTurnDamage;
  },
  turnResult: () => battleMembers,
}
const defautMage = () => mage.healthPoints = 130;
const defautDragon = () => dragon.healthPoints = 350;
let result = [];
function whoDiesFirst() {
  for (let i = 0; i < 100000; i += 1) {
    defautMage();
    defautDragon();
    while (dragon.healthPoints > 0 && mage.healthPoints > 0) {
      gameActions.mageTurn('critico', mageDamage);
      gameActions.dragonTurn(dragonDamage);
    }
    if (dragon.healthPoints < 0 && mage.healthPoints > 0) {
      result.push('Mago');
    } if (dragon.healthPoints > 0 && mage.healthPoints < 0) {
      result.push('Dragão');
    }
  }
}
function winner() {
  let countMage = 0;
  let countDragon = 0;
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === 'Mago') {
      countMage += 1;
    } if (result[i] === 'Dragão') {
      countDragon += 1;
    }
  }
  console.log(`O mago venceu: ${countMage} vezes, e o Dragão venceu ${countDragon} vezes`);
}

whoDiesFirst();
winner();

// aqui estão alguns testes, para usar cajado chama 'cajado', para tentar critico use 'critico';
/* gameActions.mageTurn('critico', mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.mageTurn('critico', mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.mageTurn('critico', mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.mageTurn('critico', mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResult());
*/

/*
1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
*/

