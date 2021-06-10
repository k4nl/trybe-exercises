function createStateOptions() { // cria estados
  const stateOptionInput = document.getElementById('state');
  const brazilianStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let i = 0; i <brazilianStates.length; i += 1) {
    const createOptions = document.createElement('option');
    stateOptionInput.appendChild(createOptions).innerText = brazilianStates[i];
    stateOptionInput.appendChild(createOptions).value = brazilianStates[i];
  }
}
const inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true,
  },
  cpf: {
    maxLength: 11,
    required: true,
  },
  adress: {
    maxLength: 200,
    required: true,
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

function validateName (input, key){

}
window.onload = () => {
  createStateOptions();
  formEventListener();
}