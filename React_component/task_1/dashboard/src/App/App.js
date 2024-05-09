import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notnotations.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer.js';

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  logOut = () => {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="Notification-box"><Notifications /></div>
        <Header />
        <main className="App-body align-items">
          {this.state.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
        </main>
        <Footer year={getCurrentYear()} copy={getFooterCopy(true)} />
      </div>
    );
  }
}
  App.defaultProps = {
    isLoggedIn: false,
  };

  App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func.isRequired,
  };

  export default App;
