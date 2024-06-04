import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const mapStateToProps = state => ({
  user: state.authReducer.user,
});

const Footer = ({ year, copy, user }) => (
  <footer className={css(styles.AppFooter)}>
    <p className={css(styles.AppFooterP)}>
      {copy} {year} - Logged in as: {user.username}
    </p>
  </footer>
);

Footer.propTypes = {
  year: PropTypes.number.isRequired,
  copy: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

Footer.defaultProps = {
  year: 2024,
  copy: '© Holbi',
};

const styles = StyleSheet.create({
  AppFooter: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  AppFooterP: {
    fontFamily: `'Galano Grotesque Alt', sans-serif`,
    fontWeight: 400,
    fontSize: '1.1rem',
    fontStyle: 'italic',
  },
});

export default connect(mapStateToProps)(Footer);
