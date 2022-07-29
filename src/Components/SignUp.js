import React, { useState } from "react";
import classNames from "classnames";
import { createUser } from "../services/api/rest/methods";

const SignUp = ({ toggleForm }) => {
    const [typeSwitcher, setTypeSwitcher] = useState(false);
    const [formTriggered, setFormTriggered] = useState(false);
    const [signUpForm, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const heading = () => {
        return (
            <div className="heading">
                <h2>Sign Up for Free</h2>
            </div>
        );
    };

    const signUp = () => {
        const { firstName, lastName, email, password } = signUpForm;
        return (
            <div className="form-wrapper">
                {heading()}
                <form onSubmit={onSubmit} name="signUpForm">
                    <div className="field flexed">
                        <div className="wrap">
                            <div className="with-icon">
                                <input
                                    required
                                    className={classNames("firstName", {
                                        "is-danger": !firstName && formTriggered,
                                    })}
                                    placeholder="First Name *"
                                    name="firstName"
                                    id="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={setupFormValue}
                                />
                                <i className="fas fa-user-md"></i>
                            </div>
                            {!firstName && formTriggered && <span className="error-message">Field is required</span>}
                        </div>
                        <div className="wrap">
                            <div className="with-icon">
                                <input
                                    required
                                    className={classNames("lastName", {
                                        "is-danger": !lastName && formTriggered,
                                    })}
                                    name="lastName"
                                    id="lastName"
                                    type="text"
                                    placeholder={"Last Name *"}
                                    value={lastName}
                                    onChange={setupFormValue}
                                />
                            </div>
                            {!lastName && formTriggered && <span className="error-message">Field is required</span>}
                        </div>
                    </div>
                    <div className="field">
                        <input
                            className={classNames("email", {
                                "is-danger": !email && formTriggered,
                            })}
                            required
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email Address *"
                            value={email}
                            onChange={setupFormValue}
                        />
                        {!email && formTriggered && <span className="error-message">Field is required</span>}
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
                                onChange={setupFormValue}
                            />
                            <i
                                onClick={() => setTypeSwitcher(!typeSwitcher)}
                                className={typeSwitcher ? "fas fa-lock-open" : "fas fa-lock"}
                            ></i>
                        </div>
                        {!password && formTriggered && <span className="error-message">Field is required</span>}
                    </div>
                    <button className="large active">GET STARED</button>
                </form>
            </div>
        );
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = signUpForm;
        setFormTriggered(true);
        if (firstName && lastName && email && password) {
            const response = await createUser(signUpForm);
            if (response?.status === 200) toggleForm();
        }
    };

    const setupFormValue = (e) => {
        const value = e.target.value;
        const input = e.target;
        setSignUpForm({
            ...signUpForm,
            [input.name]: value,
        });
    };

    return <div className="sign-up-wrapper">{signUp()}</div>;
};

export default SignUp;
