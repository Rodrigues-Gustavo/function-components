import './App.css';
import Button from './components/button/button';
import Cards from './components/cards/cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello world!<br></br> Im Gustavo, software engineer 
        </p>
        <Button />
        <Cards />
      </header>
    </div>
  );
}

export default App;
