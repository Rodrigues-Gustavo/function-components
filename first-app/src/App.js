import './App.css';
import Button from './components/button/button';
import Card from './components/card/card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello world!<br></br> Im Gustavo, software engineer 
        </p>
        <Button />
        <Card>
            <h3>titulo card 1</h3>
            <p>esse é um texto do card 1</p>
            <button className='btn'>aceitar</button>
        </Card>
        <Card>
            <h3>titulo card 2</h3>
            <p>esse é um texto do card 2</p>
            <button className='btn'>outros</button>
        </Card>
        <Card>
            <h3>titulo card 3</h3>
            <p>esse é um texto do card 3</p>
            <button className='btn'>cancelar</button>
        </Card>
      </header>
    </div>
  );
}

export default App;
