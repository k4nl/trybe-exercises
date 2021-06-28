const isCritico = () => Math.floor(Math.random() *10) +1;
const mage = { // atributos do mago
  healthPoints: 130, // 137 é o mais equilibrado
  intelligence: 45,
  mana: 125,
  cajado: 2, // entre 45 e 90
  cajadoCritico: 4, // 12.5 e 180
  damage: undefined,
}
const warrior = { // atributos do guerreiro
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};
const dragon = { // atributos do dragao
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);
const warriorDamage = () => Math.floor(Math.random() * (warrior.strength - warrior.strength * warrior.weaponDmg) + warrior.strength * warrior.weaponDmg);
const mageDamage = () => { // calculo do dano do mago
  const damageMana = {
    critico: Math.floor(Math.random() * (mage.intelligence + 40) + mage.intelligence / 3),
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
const gameActions = { // calculo da rodada
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
      let critico = isCritico();
      if (critico < 3) {
        dragon.healthPoints -= (mageTurnDamage.critico) * 4;
        mage.damage = (mageTurnDamage.critico) * 4;
        mage.mana = mageTurnDamage.mana;
      }
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
  for (let i = 0; i < 1000; i += 1) {
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

