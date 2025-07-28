import React, { type JSX } from "react";
import LeftBg from "../../assets/sign_ui_bg.png";
import Style from "./style.module.css";
import Form from "./Form";

const SignUpPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={Style.registerContainer}>
        <div className={Style.mainContainer}>
          <div className={Style.leftContainer}>
            <img src={LeftBg} alt="background bg" />
          </div>
          <div className={Style.rightContainer}>
            <div className={Style.form}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUpPage;
