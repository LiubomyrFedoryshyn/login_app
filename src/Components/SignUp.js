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
                <form name="signUpForm" onSubmit={onSubmit}>
                    <div className="field flexed">
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
                                onChange={validateOnChange}
                            />
                            <i className="fas fa-user-md"></i>
                        </div>
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
                            onChange={validateOnChange}
                        />
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
                    <button onClick={onSubmit} className="large active">
                        GET STARED
                    </button>
                </form>
            </div>
        );
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = signUpForm;
        setFormTriggered(true);
        // if (firstName && lastName && email && password) {
        const response = await createUser(signUpForm);
        if (response?.status === 200) toggleForm();
        // }
    };

    const validateOnChange = (event) => {
        const input = event.target;
        const form = input.form;
        const value = input.value;

        setSignUpForm({
            ...[form.name],
            [input.name]: value,
        });
    };

    return <div className="sign-up-wrapper">{signUp()}</div>;
};

export default SignUp;
