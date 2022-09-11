import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { info: { username: "", password: "" } };
  }

  login = () => {
    console.log(JSON.stringify(this.state.info));
    fetch("http://127.0.0.1:8000/library/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.info),
    })
      .then((data) => data.json())
      .then((data) => this.props.settoken(data.token))
      .catch((error) => console.log(error));
  };

  signup = () => {
    console.log(JSON.stringify(this.state.info));
    fetch("http://127.0.0.1:8000/library/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.info),
    })
      .then((data) => data.json())
      .then((data) => this.props.settoken(data.token))
      .catch((error) => console.log(error));
  };

  changeUser = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      info: { username: event.target.value, password: prevState.info.password },
    }));
  };

  changePassword = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      info: { username: prevState.info.username, password: event.target.value },
    }));
  };
  render() {
    return (
      <div>
        <h3>Login User Form</h3>
        <div className="Form">
          Username:
          <br />
          <input
            type="text"
            name="username"
            value={this.state.info.username}
            onChange={this.changeUser}
          />
          <br />
          <br />
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={this.state.info.password}
            onChange={this.changePassword}
          />
        </div>
        <button type="submit" onClick={(e) => this.login(e)}>
          Login
        </button>
        &nbsp;&nbsp;
        <button type="submit" onClick={(e) => this.signup(e)}>
          Sign up
        </button>
      </div>
    );
  }
}

export default Login;
