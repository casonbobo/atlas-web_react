import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
        <main className="App-body">
          <p>Login to access the full dashboard</p>
        </main>
        <footer className="App-footer">
          <p>Copyright 2024 - Holberton School</p>
        </footer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
    </div>
  );
}

export default App;
