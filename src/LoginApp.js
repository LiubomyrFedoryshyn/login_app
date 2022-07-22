import React, { useState } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";

import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";

const LoginApp = () => {
    const [signUpFormActive, setSignUpFormActive] = useState(true);

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
                {formToggler()}
                {signUpFormActive && (
                    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                        <SignUp toggleForm={toggleForm} />
                    </CSSTransition>
                )}
                {!signUpFormActive && (
                    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                        <LogIn />
                    </CSSTransition>
                )}
            </div>
            {/* <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}
        </div>
    );
};

export default LoginApp;
