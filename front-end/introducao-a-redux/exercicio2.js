  
const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const CHANGE_NAME_1 = 'CHANGE_NAME_1';
const CHANGE_LASTNAME_1 = 'LAST_NAME_1';
const CHANGE_NAME_2 = 'CHANGE_NAME_2';
const CHANGE_LASTNAME_2 = 'LAST_NAME_2';

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_NAME_1:
      return {
        ...state,
        nome: 'Givanildo'
      }
    case CHANGE_LASTNAME_1:
    return {
      ...state,
      sobrenome: 'HULK'
    }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_NAME_2:
      return {
        ...state,
        nome: 'Diego'
      }
    case CHANGE_LASTNAME_2:
      return {
        ...state,
        sobrenome: 'COSTA'
      }
    default:
      return state;
  }
};

const combinedReducers = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer});
const store = Redux.createStore(combinedReducers);

window.onload = () => {
  setTimeout(() => {
    store.dispatch({
      type: CHANGE_NAME_1,
    })
  }, 2000);
  setTimeout(() => {
    store.dispatch({
      type: CHANGE_NAME_2,
    })
  }, 4000);
  setTimeout(() => {
    store.dispatch({
      type: CHANGE_LASTNAME_1,
    })
  }, 6000);
  setTimeout(() => {
    store.dispatch({
      type: CHANGE_LASTNAME_2,
    })
  }, 8000);

  store.subscribe(() => {
    const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
    document.querySelector('#nome-1').innerHTML = meuPrimeiroReducer.nome;
    document.querySelector('#nome-2').innerHTML = meuSegundoReducer.nome;
    document.querySelector('#sobrenome-1').innerHTML = meuPrimeiroReducer.sobrenome;
    document.querySelector('#sobrenome-2').innerHTML = meuSegundoReducer.sobrenome;
  });
};