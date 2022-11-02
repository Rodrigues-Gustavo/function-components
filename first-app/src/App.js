import './App.css';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello world!<br></br> Im Gustavo, software engineer 
        </p>
        <Button />
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
