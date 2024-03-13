import logo from './1583522.svg';
import './App.css';
import { Button, Form} from 'react-bootstrap';

function App() {
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
        <Button variant = "primary" > wato </Button> {''}
      </header>
    </div>
  );
}

export default App;
