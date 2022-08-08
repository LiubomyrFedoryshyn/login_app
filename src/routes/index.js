import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginApp from "../LoginApp";
import UserDashboard from "../UserDashboard";
import { ROUTES } from "../utils/constants";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.login} element={<LoginApp />} />
            <Route path={ROUTES.dashboard} element={<UserDashboard />} />
        </Routes>
    );
};

export default Router;
