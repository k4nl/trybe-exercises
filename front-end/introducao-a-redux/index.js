window.onload = function() {

  const NEXT_COLOR = 'NEXT_COLOR';
  const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
  const NEW_COLOR = 'NEW_COLOR'

  const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  const changeColor = (state = ESTADO_INICIAL, action) => {
    const nextIndex = () => {
      if ((state.colors.length - 1) === state.index) {
        return state.index;
      } else {
        return state.index + 1;
      }
    }
    const previousIndex = () => {
      if(state.index === 0) {
        return state.index;
      } else {
        return state.index - 1;
      }
    }
    function criarCor() {
      const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
      let cor = '#';
      const aleatorio = () => Math.floor(Math.random() * oneChar.length);
      for (let i = 0; i < 6; i += 1) {
          cor += oneChar[aleatorio()];
      }
      return cor;
    }
    switch(action.type) {
      case NEXT_COLOR:
        return {
          ...state,
          index: nextIndex(),
        }
      case PREVIOUS_COLOR:
        return {
          ...state,
          index: previousIndex(),
        }
      case NEW_COLOR:
        return {
          colors: [...state.colors, criarCor()],
          index: state.colors.length,
        }
      default:
        return state; 
    }
  }

  const store = Redux.createStore(changeColor);
  

  const nextButton = document.querySelector('#next');
  const previousButton = document.querySelector('#previous');
  const newColor = document.querySelector('#random');

  newColor.addEventListener('click',() => {
    store.dispatch({ type: NEW_COLOR })
  })
  
  nextButton.addEventListener('click',() => {
    store.dispatch({ type: NEXT_COLOR });
    
  });

  previousButton.addEventListener('click',() => {
    store.dispatch({ type: PREVIOUS_COLOR });
  });

  store.subscribe(() => {
    const { colors, index } = store.getState();
    const value = document.querySelector('#value');
    const container = document.querySelector('#container');
    value.innerText = colors[index];
    container.style.backgroundColor = colors[index];
  })

}