import React, { type JSX } from "react";
import Style from "./style.module.css";
import Captcha from "../../assets/recaptcha.png";
import { BiHide } from "react-icons/bi";

const Form = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={Style.createAccountText}>
        <p> Create an account </p>
      </div>

      <div className={Style.loginRedirection}>
        <p>
          Already have an ccount? <span> Log in </span>{" "}
        </p>
      </div>

      <div className={Style.inputContainer}>
        <span className={Style.label}> User name </span>
        <input type="text" className={Style.inputField} />
      </div>

      <div className={Style.inputContainer}>
        <span className={Style.label}> Email address </span>
        <input type="email" className={Style.inputField} />
      </div>

      <div className={Style.inputContainer}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div>
            <span className={Style.label}> Password </span>{" "}
          </div>
          <div>
            <BiHide
              style={{
                width: 25,
                height: 25,
                color: "666666",
                position: "absolute",
                left: 502,
              }}
            />
            <span className={Style.label}>Hide</span>
          </div>
        </div>
        <input type="password" className={Style.inputField} />
      </div>

      <span style={{ fontWeight: 400, color: "#666666", fontSize: 16 }}>
        Use 8 or more characters with a mix of letters, numbers & symbols
      </span>

      <div className={Style.privacyAndPolicy}>
        <p>By creating an account, you agree to our</p>
        <p>
          <span> Terms of use </span> and <span> Privacy Policy </span>
        </p>
      </div>

      <div className={Style.reCaptchaContainer}>
        <div className={Style.reCaptchaItem}>
          <div className={Style.checkBox}>
            <input type="checkbox" />
            <span> I'm not a robot </span>
          </div>
          <div className={Style.captchaIcon}>
            <img src={Captcha} alt="Captcha" />
          </div>
        </div>
      </div>

      

      <div className={Style.createAccountButtonContainer}>
        <button className={Style.createAccountButton}>Create an account</button>
      </div>

      <div className={Style.loginRedirection}>
        <p style={{ marginTop: 10 , marginLeft: 3 }}>
          Already have an ccount? <span> Log in </span>{" "}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Form;
