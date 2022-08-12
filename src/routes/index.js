import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginApp, UserDashboard, ChangePassword } from "../pages";
import { ROUTES } from "../utils/constants";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.login} element={<LoginApp />} />
            <Route path={ROUTES.dashboard} element={<UserDashboard />} />
            <Route path={ROUTES.change_password} element={<ChangePassword />} />
        </Routes>
    );
};

export default Router;
