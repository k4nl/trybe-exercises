function createStateOptions() { // cria estados
  const stateOptionInput = document.getElementById('state');
  const brazilianStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let i = 0; i <brazilianStates.length; i += 1) {
    const createOptions = document.createElement('option');
    stateOptionInput.appendChild(createOptions).innerText = brazilianStates[i];
    stateOptionInput.appendChild(createOptions).value = brazilianStates[i];
  }
}

window.onload = () => {
  createStateOptions();
  document.getElementById('startDate').DatePickerX.init();
}