import logo from './1583522.svg';
import './App.css';
import { Button, Form} from 'react-bootstrap';
import PrimerFormulario from './componente/PrimerFormulario';
import {useState} from 'react';

function App() {
const [personanombre, setpersona] = useState ("Alvaro");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          wato
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <PrimerFormulario personanombre={personanombre} />
      </header>
    </div>
  );
}

export default App;
