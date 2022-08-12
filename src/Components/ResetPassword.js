import { React, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { resetPassword } from "../services/api/rest/methods";
import { toast } from "react-toastify";

const ResetPassword = ({ setResetPasswordActive }) => {
    const [email, setEmail] = useState("");
    const [formTriggered, setFormTriggered] = useState(false);

    const heading = () => {
        return (
            <div className="heading">
                <h2>Forgotten Password</h2>
                <div className="forgot-description center">
                    <Link to="#" href="#">
                        We will send auto-generated temporary password to the provided email address
                    </Link>
                </div>
            </div>
        );
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormTriggered(true);
        const res = await resetPassword({ email });
        if (res.status === 200) {
            setResetPasswordActive(false);
            toast.success("New password was generated. Please, check your email address!");
        }
    };

    return (
        <div className="form-wrapper">
            <i onClick={() => setResetPasswordActive(false)} className="fas fa-arrow-alt-circle-left back-icon"></i>
            {heading()}
            <form name="resetPasswordForm" onSubmit={onSubmit}>
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
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setFormTriggered(false);
                        }}
                    />
                </div>
                <button className="large active">RESET PASSWORD</button>
            </form>
        </div>
    );
};

export default ResetPassword;
