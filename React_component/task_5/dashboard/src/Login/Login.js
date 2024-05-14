import './Login.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      <main className="align-items=left">
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
    </div>
  );
}

export default App;
