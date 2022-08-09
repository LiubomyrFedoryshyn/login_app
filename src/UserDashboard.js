import React, { useEffect, useState } from "react";
import moment from "moment";
import { getUser, logOutUser } from "./services/api/rest/methods";
import redirectLogOut from "./helpers/redirectLogOut";

const UserDashboard = () => {
    useEffect(() => {
        getUserInfo();
    }, []);

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

    return (
        <div className="main-wrapper">
            <div className="login-wrapper">
                <h1>User main info</h1>
                {user?.firstName && user?.lastName && (
                    <p>
                        {user?.firstName} {user?.lastName}
                    </p>
                )}
                {user?.email && <p>{user?.email}</p>}
                {user?.createdAt && <p>Created in {moment(user?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>}
                <button onClick={logOut} className="medium active">
                    Log out
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;
