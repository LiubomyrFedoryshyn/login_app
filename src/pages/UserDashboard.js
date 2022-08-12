import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getUser, logOutUser } from "../services/api/rest/methods";
import { redirectLogOut } from "../helpers";
import { ROUTES } from "../utils/constants";

const UserDashboard = () => {
    useEffect(() => {
        getUserInfo();
    }, []);

    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const getUserInfo = async () => {
        const id = localStorage.getItem("user_key");
        const res = await getUser(id);
        if (res.status === 200) {
            setUser(res.data);
        }
    };

    const logOut = async () => {
        await logOutUser();
        redirectLogOut();
    };

    const redirectToChange = () => {
        navigate(ROUTES.change_password);
    };

    return (
        <div className="main-wrapper">
            <div className="login-wrapper">
                <h2>User main info</h2>
                {user?.firstName && user?.lastName && (
                    <p>
                        {user?.firstName} {user?.lastName}
                    </p>
                )}
                {user?.email && <p>{user?.email}</p>}
                {user?.createdAt && <p>Created in {moment(user?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>}
                <div className="toggler-wrapper">
                    <button onClick={redirectToChange} className="medium active">
                        CHANGE PASSWORD
                    </button>
                    <button onClick={logOut} className="medium">
                        LOG OUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
