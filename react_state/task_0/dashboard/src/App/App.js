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
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    displayDrawer: false,
  };

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false
    });
  }

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
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ]
  
    const listNotifications = [
      { id: 1, type: 'default', value: 'New Course Available'},
      { id: 2, type: 'urgent', value: 'New Resume Available'},
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' }
    ]
    return (
      <div className={css(styles.App)}>
        <div className={css(styles.NotificationBox)}>
          <Notifications  
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            listNotifications={listNotifications} 
            />
        </div>
        <Header />
        <main className={css(styles.AppBody)}>
          {this.state.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
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

const styles = StyleSheet.create({
  root: {
    '--red': '#E1160B',
  },
  AppLogo: {
    height: '12rem',
    pointerEvents: 'none',
  },
  AppHeader: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  AppHeaderH1: {
    fontSize: '3.5rem',
    color: 'var(--red)',
    fontFamily: `'Galano Grotesque Alt', sans-serif`,
    fontWeight: 800,
  },
  AppBody: {
    width: '90%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    borderTop: '5px solid var(--red)',
    borderBottom: '5px solid var(--red)',
    flexDirection: 'column',
  },
  AppBodyP: {
    fontFamily: `'Galano Grotesque Alt', sans-serif`,
    fontWeight: 400,
    fontSize: '1.3rem',
    margin: '4rem 2rem 1rem 4rem',
  },
  AppFooterP: {
    fontFamily: `'Galano Grotesque Alt', sans-serif`,
    fontWeight: 400,
    fontSize: '1.1rem',
    fontStyle: 'italic',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  body: {
    fontWeight: 100,
  },
  footer: {
    fontWeight: 100,
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: () => {},
};

export default App;
