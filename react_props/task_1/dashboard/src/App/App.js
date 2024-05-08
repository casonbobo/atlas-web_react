import './App.css';
import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Notifications />
        <Header />
        <main className="App-body align-items">
          <div>
            <Login />
          </div>
        </main>
      <Footer year={getCurrentYear()} copy={getFooterCopy(true)} />
    </div>
  );
}

export default App;
