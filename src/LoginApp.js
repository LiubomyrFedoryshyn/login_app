import React, { Component } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import "./styles/App.css";

import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";

class app extends Component {
  state = {
    signUpFormActive: true
  };

  get formToggler() {
    return (
      <div className="toggler-wrapper">
        <button
          onClick={this.toggleForm}
          className={classNames("medium", {
            active: this.state.signUpFormActive
          })}
        >
          Sign Up
        </button>
        <button
          onClick={this.toggleForm}
          className={classNames("medium", {
            active: !this.state.signUpFormActive
          })}
        >
          Log in
        </button>
      </div>
    );
  }

  toggleForm = () => {
    this.setState({ signUpFormActive: !this.state.signUpFormActive });
  };

  render() {
    return (
      <div className="main-wrapper">
        <div className="login-wrapper">
          {this.formToggler}
          {this.state.signUpFormActive && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={300}
              classNames="fade"
            >
              <SignUp />
            </CSSTransition>
          )}
          {!this.state.signUpFormActive && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={300}
              classNames="fade"
            >
              <LogIn />
            </CSSTransition>
          )}
        </div>
      </div>
    );
  }
}

export default app;
