import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import classNames from "classnames";

class LogIn extends Component {
  state = {
    loginForm: {
      email: "",
      password: ""
    },
    typeSwitcher: false,
    formTriggered: false
  };

  get heading() {
    return (
      <div className="heading">
        <h2>Welcome Back!</h2>
      </div>
    );
  }

  get loginForm() {
    const { email, password } = this.state.loginForm;
    return (
      <div className="form-wrapper">
        {this.heading}
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="field">
            <input
              autoComplete="off"
              required
              className={classNames("email", {
                "is-danger": !email && this.state.formTriggered
              })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address *"
              value={email}
              onChange={this.validateOnChange}
            />
          </div>
          <div className="field">
            <div className="with-icon">
              <input
                required
                className={classNames("password", {
                  "is-danger": !password && this.state.formTriggered
                })}
                name="password"
                id="password"
                type={this.state.typeSwitcher ? "text" : "password"}
                placeholder="Set A Password *"
                value={password}
                onChange={this.validateOnChange}
              />
              <i
                onClick={() =>
                  this.setState({ typeSwitcher: !this.state.typeSwitcher })
                }
                className={
                  this.state.typeSwitcher ? "fas fa-lock-open" : "fas fa-lock"
                }
              ></i>
            </div>
          </div>
          <div className="forgot-description">
            <BrowserRouter>
              <Link to="#" href="#">
                Forgot Password?
              </Link>
            </BrowserRouter>
          </div>
          <button onClick={this.onSubmit} className="large active">
            LOG IN
          </button>
        </form>
      </div>
    );
  }

  onSubmit = () => {
    this.setState({ formTriggered: true });
    //here is the place for another back-end call
  };

  validateOnChange = event => {
    const input = event.target;
    const form = input.form;
    const value = input.value;

    this.setState({
      [form.name]: {
        ...this.state[form.name],
        [input.name]: value
      }
    });
  };

  render() {
    return <div className="log-in-wrapper">{this.loginForm}</div>;
  }
}

export default LogIn;
