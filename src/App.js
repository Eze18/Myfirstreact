import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';

//jsx - js xml 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Get that 30</code> Get that 30 - Ezekiel
        </p>
    
        <Greet name= "Astartes" Spacemarine= "Guilliman">
           <Message/>
        </Greet>
        <Greet name= "Emperor" Spacemarine= "of Mankind"/>
           <Button/>
        <Greet name= "" Native rambo= "catachan"/>
        <Greet name= "Corvus" Spacemarine= "Eldar"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;