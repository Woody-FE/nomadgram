import React from "react";
import styles from "./styles.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Phone" />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo" />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p>
            Don't have an account?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              Sign Up
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p>
            Have an account?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              Log in
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>Get the app.</span>
        <div className={styles.appStores}>
          <img src={require("images/ios.png")} alt="ios" />
          <img src={require("images/android.png")} alt="android" />
          <img src={require("images/microsoft.png")} alt="microsoft" />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;
