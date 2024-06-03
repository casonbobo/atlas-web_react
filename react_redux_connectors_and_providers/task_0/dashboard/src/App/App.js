import React from 'eact';
import { connect } from 'eact-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/notificationActions';
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

const mapStateToProps = state => ({
  isLoggedIn: state.uiReducer.isLoggedIn,
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

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

  logIn = (email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  };

  logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  };

  markNotificationAsRead = (id) => {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id!== id),
    }));
  };

  render() {
    const {
      user,
      logOut,
      logIn,
      displayNotificationDrawer,
      hideNotificationDrawer,
    } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut, logIn: this.state.logIn }}>
        <div className={css(styles.NotificationBox)}>
          <Notifications
            displayDrawer={displayNotificationDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
        </div>
        <Header />
        <main className={css(styles.AppBody)}>
          {user.isLoggedIn? (
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
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

App.defaultProps = {
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

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
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
