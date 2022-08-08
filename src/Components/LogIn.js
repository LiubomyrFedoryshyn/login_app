import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { toast } from "react-toastify";
import { loginUser } from "../services/api/rest/methods";

const LogIn = () => {
    const navigate = useNavigate();
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
                            onChange={setupFormValue}
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
                                onChange={setupFormValue}
                            />
                            <i
                                onClick={() => setTypeSwitcher(!typeSwitcher)}
                                className={typeSwitcher ? "fas fa-lock-open" : "fas fa-lock"}
                            ></i>
                        </div>
                    </div>
                    <div className="forgot-description">
                        <Link to="#" href="#">
                            Forgot Password?
                        </Link>
                    </div>
                    <button className="large active">LOG IN</button>
                </form>
            </div>
        );
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginForm;
        setFormTriggered(true);
        if (email && password) {
            const response = await loginUser(loginForm);
            if (response?.status === 200) {
                localStorage.setItem("user_key", response?.data?.user?._id);
                toast.success("Signed in successfully!");
                navigate(`/user-dashboard`);
            }
        }
        //here is the place for another back-end call
    };
    const setupFormValue = (e) => {
        const value = e.target.value;
        const input = e.target;
        setLoginForm({
            ...loginForm,
            [input.name]: value,
        });
    };

    return <div className="log-in-wrapper">{formLogin()}</div>;
};

export default LogIn;
