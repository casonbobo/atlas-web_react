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
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </footer>
    </div>
  );
}

export default App;
