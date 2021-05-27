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

// exercicio 7

let elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
elementDivLeft.appendChild(elementImg);

// exercicio 8

let elementUl = document.createElement('ul');
elementDivRight.appendChild(elementUl);
let arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis','Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
  let elementLi = document.createElement('li');
    elementLi.innerHTML = arrayNumbers[num];
    elementUl.appendChild(elementLi);
}

// exercicio 9

for (let i = 0; i < 3; i += 1) {
  let elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Salve ' + i +' Salgadin';
  elementDivMain.appendChild(elementH3)
}

