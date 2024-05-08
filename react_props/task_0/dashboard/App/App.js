import './App.css';
import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';

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
