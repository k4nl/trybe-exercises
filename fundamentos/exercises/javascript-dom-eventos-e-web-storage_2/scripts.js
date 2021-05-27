// exercicio 1

let elementH1 = document.createElement('h1');
elementH1.innerHTML = 'Exercicio 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);

// exercicio 2

let elementDivMain = document.createElement('main');
elementDivMain.className = 'main-content';
document.body.appendChild(elementDivMain);

// exercicio 3

let elementDivCenter = document.createElement('center');
elementDivCenter.className = 'center-content';
elementDivMain.appendChild(elementDivCenter);

// exercicio 4

let elementP = document.createElement('p');
elementP.textContent = 'Oliva não gosta de queijo e nem de toucinho';
elementDivCenter.appendChild(elementP);

// exercicio 5

let elementDivLeft = document.createElement('left')
elementDivLeft.className = 'left-content';
elementDivMain.appendChild(elementDivLeft);

// exercicio 6

let elementDivRight = document.createElement('right');
elementDivRight.className = 'right-content';
elementDivMain.appendChild(elementDivRight);

