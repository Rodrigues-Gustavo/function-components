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
        <Card title='titulo card 1' />
        <Card title='titulo card 2' />
        <Card title='titulo card 3' />
      </header>
    </div>
  );
}

export default App;
