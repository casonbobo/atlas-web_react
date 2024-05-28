// import '../App/App.css';
import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext'

function App() {
  const { user } = useContext(AppContext);
  return (
    <div className={css(styles.App)}>
      <footer className={css(styles.AppFooter)}>
        {user.isLoggedIn && (<p className='contact-us'><a href='#'>Contact Us</a></p>)}
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

const styles = StyleSheet.create({
  App: {
    textAlign: 'center',
    borderTop: '5px solid var(--red)',
  },
  root: {
    '--red': '#E1160B',
  },
  AppFooter: {
    'p': {
      fontFamily: `'Galano Grotesque Alt', sans-serif`,
      fontWeight: 400,
      fontSize: '1.1rem',
      fontStyle: 'italic',
    },
  },
});

export default App;
