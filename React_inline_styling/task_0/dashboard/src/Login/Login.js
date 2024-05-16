// import './Login.css';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
function App() {
  return (
    <div className={css(styles.App)}>
      <main className={css(styles.Login)}>
        <p>Login to access the full dashboard</p>
        <div>
          <form>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required></input>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required></input>
              <button>OK</button>
          </form>
        </div>
      </main>
    </div>
  );
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
  AppBody: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    flexDirection: 'column',
  },
});

export default App;
