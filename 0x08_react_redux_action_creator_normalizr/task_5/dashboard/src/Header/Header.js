// import '../App/App.css';
import React from 'react';
import logo from '../../assets/logo.png';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext.js';

class Header extends React.Component {
  static contextType = AppContext;
  render() {
    const { user, logOut } = this.context;
    return (
      <>
        <div className={css(styles.App)}>
          <header className={css(styles.AppHeader)}>
            <img src={logo} className={css(styles.logo)} alt="logo" />
            <h1>School dashboard</h1>
          </header>
          <hr className={css(styles.hr)}></hr>
          {user.isLoggedIn && (
          <section id='logoutSection'>
            Welcome {user.email} (<a href='#' onClick={logOut}>logout</a>)
          </section>
          )}
        </div>
      </>
    )  
  };
}

const styles = StyleSheet.create({
  App: {
    textAlign: 'center',
  },
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
    borderBottom: '5px solid var(--red)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  AppHeaderH1: {
    fontSize: '3.5rem',
    color: 'var(--red)',
    fontFamily: `'Galano Grotesque Alt', sans-serif`,
    fontWeight: 800,
  },
});

export default App;
