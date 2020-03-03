import React, { Component } from "react";
import classNames from "classnames";

class SignUp extends Component {
  state = {
    signUoForm: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    typeSwitcher: false,
    formTriggered: false
  };

  get heading() {
    return (
      <div className="heading">
        <h2>Sign Up for Free</h2>
      </div>
    );
  }

  get signUp() {
    const { firstName, lastName, email, password } = this.state.signUoForm;
    return (
      <div className="form-wrapper">
        {this.heading}
        <form name="signUoForm" onSubmit={this.onSubmit}>
          <div className="field flexed">
            <div className="with-icon">
              <input
                required
                className={classNames("firstName", {
                  "is-danger": !firstName && this.state.formTriggered
                })}
                placeholder="First Name *"
                name="firstName"
                id="firstName"
                type="text"
                value={firstName}
                onChange={this.validateOnChange}
              />
              <i className="fas fa-user-md"></i>
            </div>
            <input
              required
              className={classNames("lastName", {
                "is-danger": !lastName && this.state.formTriggered
              })}
              name="lastName"
              id="lastName"
              type="text"
              placeholder={"Last Name *"}
              value={lastName}
              onChange={this.validateOnChange}
            />
          </div>
          <div className="field">
            <input
              className={classNames("email", {
                "is-danger": !email && this.state.formTriggered
              })}
              required
              name="email"
              id="email"
              type="email"
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
          <button onClick={this.onSubmit} className="large active">
            GET STARED
          </button>
        </form>
      </div>
    );
  }

  onSubmit = () => {
    this.setState({ formTriggered: true });
    //here is the place for back-end call
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
    return <div className="sign-up-wrapper">{this.signUp}</div>;
  }
}

export default SignUp;
