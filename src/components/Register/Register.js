import React from "react";
import styles from "./Register.module.css";
import OrangeSection from "../OrangeSection/OrangeSection";
import Lock from "../../Img/TRAMONTO/Lock.svg";
import User from "../../Img/user.svg";
import Mail from "../../Img/Mail logo.svg";

class Register extends React.Component {
  render() {
    return (
      <div>
        <OrangeSection title="REGISTRACIJA" />

        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h1 className={styles.title}>REGISTRACIJA</h1>
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
                <img src={Mail} className={styles.icon} />
                <input
                  type="text"
                  placeholder="E-mail"
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
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={Lock} className={styles.icon} />
                <input
                  type="password"
                  placeholder="Ponovite lozinku"
                  className={styles.input}
                />
              </div>
            </div>
            <button className={styles.button}>Registriraj se</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
