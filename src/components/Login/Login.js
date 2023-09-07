import React from "react";
import styles from "./Login.module.css";
import OrangeSection from "../OrangeSection/OrangeSection";
import Lock from "../../Img/TRAMONTO/Lock.svg";
import User from "../../Img/user.svg";

class Login extends React.Component {
  render() {
    return (
      <div>
        <OrangeSection title="PRIJAVA" />
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h1 className={styles.title}>PRIJAVA</h1>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={User} className={styles.icon} />
                <input
                  type="text"
                  placeholder="Korisničko ime"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={Lock} className={styles.icon} />
                <input
                  type="password"
                  placeholder="Lozinka"
                  className={styles.input}
                />
              </div>
            </div>
            <button className={styles.button}>Prijavi se</button>
            <p className={styles.registerLink}>
              Nemate korisnički račun? <a href="/Register">Registrirajte se</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
