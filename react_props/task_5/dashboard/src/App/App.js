import React from 'react';
import './App.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer.js';

function App({ isLoggedIn }) {
  // Create a new array named listCourses
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  return (
    <div className="App">
      <div className="Notification-box"><Notifications /></div>
      <Header />
      <main className="App-body align-items">
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
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
