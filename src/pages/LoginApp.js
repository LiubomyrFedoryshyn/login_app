import React, { useState } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import SignUp from "../Components/SignUp";
import LogIn from "../Components/LogIn";
import ResetPassword from "../Components/ResetPassword";

const LoginApp = () => {
    const [signUpFormActive, setSignUpFormActive] = useState(true);
    const [resetPasswordAtive, setResetPasswordActive] = useState(false);

    const formToggler = () => {
        return (
            <div className="toggler-wrapper">
                <button
                    onClick={toggleForm}
                    className={classNames("medium", {
                        active: signUpFormActive,
                    })}
                >
                    Sign Up
                </button>
                <button
                    onClick={toggleForm}
                    className={classNames("medium", {
                        active: !signUpFormActive,
                    })}
                >
                    Log in
                </button>
            </div>
        );
    };

    const toggleForm = () => {
        setSignUpFormActive(!signUpFormActive);
    };

    return (
        <div className="main-wrapper">
            <div className="login-wrapper">
                {resetPasswordAtive ? (
                    <>
                        <ResetPassword setResetPasswordActive={setResetPasswordActive} />
                    </>
                ) : (
                    <>
                        {formToggler()}
                        {signUpFormActive && (
                            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                                <SignUp toggleForm={toggleForm} />
                            </CSSTransition>
                        )}
                        {!signUpFormActive && (
                            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                                <LogIn setResetPasswordActive={setResetPasswordActive} />
                            </CSSTransition>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginApp;
