import React from "react";
import ReactDOM from "react-dom/client";
import LoginApp from "./LoginApp";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <LoginApp />
    </React.StrictMode>
);
