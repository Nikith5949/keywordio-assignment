import React, { Component } from "react";

class Sign extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Signup User Form</h3>
        <div className="Form">
          Username:
          <br />
          <input type="text" name="username" />
          <br />
          <br />
          Password:
          <br />
          <input type="password" name="password" />
        </div>

        <button type="submit">Sign up</button>
      </div>
    );
  }
}

export default Sign;
