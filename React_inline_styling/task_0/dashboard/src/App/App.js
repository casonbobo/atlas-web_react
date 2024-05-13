import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  logOut = () => {
    this.setState({ isLoggedIn: false });
  };

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
          {this.state.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
          </BodySection>
        </main>
        <Footer year={getCurrentYear()} copy={getFooterCopy(true)} />
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: PropTypes.func,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: () => {},
};

export default App;
