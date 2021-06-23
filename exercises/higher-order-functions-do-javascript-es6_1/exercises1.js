/* Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
*/
const employeeData = (fullname) => ({ fullname, email: `${fullname.toLowerCase().split(' ').join('_')}@trybe.com` }); 
const employeeName = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];
const newEmployees = (callback) => {
  const employees = {
    id1: callback(employeeName[0]), 
    id2: callback(employeeName[1]), 
    id3: callback(employeeName[2]), 
  }
  return employees;
};

/*const newEmployees1 = (callback) => {
  const empregados = {};
  for (let i = 0; i < employeeName.length; i += 0) {
    console.log(employeeName[0]);
  }
  return empregados;
};
*/
console.log(newEmployees(employeeData));