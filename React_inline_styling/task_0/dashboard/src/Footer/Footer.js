import '../App/App.css';
import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';

function App() {
  return (
    <div className="App">
      <footer className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
