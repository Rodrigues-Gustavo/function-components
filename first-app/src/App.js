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
        <Card />
      </header>
    </div>
  );
}

export default App;
