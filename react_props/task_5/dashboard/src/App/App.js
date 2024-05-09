import './App.css';
import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
// import Notifications from '../Notifications/Notifications.css';
import Footer from '../Footer/Footer.js';

function App({isLoggedIn }) {
  return (
    <div className="App">
      <div className="Notification-box"><Notifications /></div>
        <Header />
        <main className="App-body align-items">
          {isLoggedIn ? <CourseList /> : <Login />}
        </main>
      <Footer year={getCurrentYear()} copy={getFooterCopy(true)} />
    </div>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
