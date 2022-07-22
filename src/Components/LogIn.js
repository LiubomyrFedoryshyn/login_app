import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import classNames from "classnames";

const LogIn = () => {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [typeSwitcher, setTypeSwitcher] = useState(false);
    const [formTriggered, setFormTriggered] = useState(false);

    const heading = () => {
        return (
            <div className="heading">
                <h2>Welcome Back!</h2>
            </div>
        );
    };

    const formLogin = () => {
        const { email, password } = loginForm;
        return (
            <div className="form-wrapper">
                {heading()}
                <form name="loginForm" onSubmit={onSubmit}>
                    <div className="field">
                        <input
                            autoComplete="off"
                            required
                            className={classNames("email", {
                                "is-danger": !email && formTriggered,
                            })}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address *"
                            value={email}
                            onChange={validateOnChange}
                        />
                    </div>
                    <div className="field">
                        <div className="with-icon">
                            <input
                                required
                                className={classNames("password", {
                                    "is-danger": !password && formTriggered,
                                })}
                                name="password"
                                id="password"
                                type={typeSwitcher ? "text" : "password"}
                                placeholder="Set A Password *"
                                value={password}
                                onChange={validateOnChange}
                            />
                            <i
                                onClick={() => setTypeSwitcher(!typeSwitcher)}
                                className={typeSwitcher ? "fas fa-lock-open" : "fas fa-lock"}
                            ></i>
                        </div>
                    </div>
                    <div className="forgot-description">
                        <BrowserRouter>
                            <Link to="#" href="#">
                                Forgot Password?
                            </Link>
                        </BrowserRouter>
                    </div>
                    <button onClick={onSubmit} className="large active">
                        LOG IN
                    </button>
                </form>
            </div>
        );
    };

    const onSubmit = () => {
        setFormTriggered(true);
        //here is the place for another back-end call
    };

    const validateOnChange = (event) => {
        const input = event.target;
        const form = input.form;
        const value = input.value;

        setLoginForm({
            ...[form.name],
            [input.name]: value,
        });
    };

    return <div className="log-in-wrapper">{formLogin()}</div>;
};

export default LogIn;
