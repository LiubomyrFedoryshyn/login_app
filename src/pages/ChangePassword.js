import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { changePassword } from "../services/api/rest/methods";
import { toast } from "react-toastify";
import { validatePassword } from "../helpers";
import { ROUTES } from "../utils/constants";

const UserDashboard = () => {
    useEffect(() => {
        getUserId();
    }, []);

    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [newPasswordForm, setNewPasswordForm] = useState({ newPassword: "", newPasswordConfirm: "" });
    const [formTriggered, setFormTriggered] = useState(false);
    const [typeSwitcher, setTypeSwitcher] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormTriggered(true);
        const { newPasswordConfirm, newPassword } = newPasswordForm;
        if (newPasswordConfirm === newPassword && newPassword.length >= 8 && newPassword.length <= 12) {
            const res = await changePassword({ id: userId, newPassword });
            if (res?.status === 200) {
                toast.success("Password was successfully changed");
                setFormTriggered(false);
                navigate(ROUTES.dashboard);
            }
        }
    };

    const setupFormValue = (e) => {
        const value = e.target.value;
        const input = e.target;
        setFormTriggered(false);
        setNewPasswordForm({
            ...newPasswordForm,
            [input.name]: value,
        });
    };

    const getUserId = () => {
        const id = localStorage.getItem("user_key");
        if (id) {
            setUserId(id);
        } else {
            localStorage.removeItem("user_key");
            setUserId("");
            navigate(ROUTES.login);
        }
    };

    const changePasswordForm = () => {
        const { newPassword, newPasswordConfirm } = newPasswordForm;
        return (
            <div className="form-wrapper">
                <form name="changePasswordForm" onSubmit={onSubmit}>
                    <div className="field">
                        <div className="with-icon">
                            <input
                                required
                                className={classNames("password", {
                                    "is-danger":
                                        (!newPassword && formTriggered) || (!validatePassword(newPassword) && formTriggered),
                                })}
                                name="newPassword"
                                id="newPassword"
                                type={typeSwitcher ? "text" : "password"}
                                placeholder="Create New Password *"
                                value={newPassword}
                                onChange={setupFormValue}
                                maxLength={12}
                                minLength={8}
                            />
                            <i
                                onClick={() => setTypeSwitcher(!typeSwitcher)}
                                className={typeSwitcher ? "fas fa-lock-open" : "fas fa-lock"}
                            ></i>
                        </div>
                        {newPassword && !validatePassword(newPassword) && formTriggered && (
                            <p className="is-danger">
                                Password should hawe at least one lowercase letter, one uppercase letter, one digit, one special
                                character, and is at least eight characters long
                            </p>
                        )}
                    </div>
                    <div className="field">
                        <div className="with-icon">
                            <input
                                required
                                className={classNames("password", {
                                    "is-danger":
                                        (!newPasswordConfirm && formTriggered) ||
                                        (newPasswordConfirm !== newPassword && formTriggered) ||
                                        (!validatePassword(newPasswordConfirm) && formTriggered),
                                })}
                                name="newPasswordConfirm"
                                id="newPasswordConfirm"
                                type={typeSwitcher ? "text" : "password"}
                                placeholder="Repeat Password *"
                                value={newPasswordConfirm}
                                onChange={setupFormValue}
                                maxLength={12}
                                minLength={8}
                            />
                            <i
                                onClick={() => setTypeSwitcher(!typeSwitcher)}
                                className={typeSwitcher ? "fas fa-lock-open" : "fas fa-lock"}
                            ></i>
                        </div>
                        {newPasswordConfirm !== newPassword && formTriggered && (
                            <p className="is-danger">Fields should be equal</p>
                        )}
                        {newPasswordConfirm && !validatePassword(newPasswordConfirm) && formTriggered && (
                            <p className="is-danger">
                                Password should hawe at least one lowercase letter, one uppercase letter, one digit, one special
                                character, and is at least eight characters long
                            </p>
                        )}
                    </div>
                    <button disabled={newPasswordConfirm !== newPassword && formTriggered} className="large active">
                        RESET PASSWORD
                    </button>
                </form>
            </div>
        );
    };

    return (
        <div className="main-wrapper">
            <div className="login-wrapper">
                <h2>Password Change</h2>
                {changePasswordForm()}
            </div>
        </div>
    );
};

export default UserDashboard;
