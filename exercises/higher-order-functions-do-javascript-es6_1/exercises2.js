/*
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const check = (myNumber, number) => {
  if ( myNumber === number) {
    return 'Parabens acertou! XDDD'
  }
  return 'Tente Novamente :('
}
const result = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 6);
  // console.log(myNumber);
  // console.log(number);
  return callback(myNumber, number);
}
console.log(result(2, check));
