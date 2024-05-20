import React from "react";
import PropTypes from "prop-types";
import { Stylesheet } from "aphrodite";

const styles = Stylesheet.create({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  label: {
    marginBottom: "10px",
  },
  input: {
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
  },
  'media (max-width: 900px)': {
    formContainer: {
      padding: "10px",
    },
    label: {
      marginBottom: "5px",
    },
    input: {
      marginBottom: "10px",
    },
    button: {
      marginTop: "10px",
    },
  },
});

function Login({ onSubmit }) {
  return (
    <div className={styles.formContainer}>
      <label className={styles.label}>Username</label>
      <input className={styles.input} type="text" />
      <label className={styles.label}>Password</label>
      <input className={styles.input} type="password" />
      <button className={styles.button} onClick={onSubmit}>
        Login
      </button>
    </div>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
