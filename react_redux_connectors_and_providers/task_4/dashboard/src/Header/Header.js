import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import logo from '../../assets/logo.png';
import { StyleSheet, css } from 'aphrodite';

const mapStateToProps = state => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = {
  logout,
};

const Header = ({ user, logout }) => (
  <div className={css(styles.App)}>
    <header className={css(styles.AppHeader)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1>School dashboard</h1>
    </header>
    <hr className={css(styles.hr)}></hr>
    {user.isLoggedIn && (
      <section id='logoutSection'>
        Welcome {user.email} (<a href='#' onClick={logout}>logout</a>)
      </section>
    )}
  </div>
);

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
