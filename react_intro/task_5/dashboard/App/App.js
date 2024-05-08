import './App.css';
import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import logo from '../assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
        <main className="App-body align-items">
          <p>Login to access the full dashboard</p>
          <div>
            <form>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
                <button>OK</button>
            </form>
          </div>
        </main>
        <footer className="App-footer">
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </footer>
    </div>
  );
}

export default App;
