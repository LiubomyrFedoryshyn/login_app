import React from "react";
import ReactDOM from "react-dom";
import LoginApp from "./LoginApp";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(<LoginApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
