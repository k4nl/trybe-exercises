import logo from './logo.svg';
import './App.css';
const toDoList = ['fazer mala', 'colocar roupa', 'estudar para trybe', 'xablau'];
const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {toDoList.map(element => Task(element))}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
