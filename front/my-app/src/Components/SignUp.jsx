import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  updateEmailField = event => {
    const even = event.target.value;
    this.setState({ email: even });
  };

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input type="email" name="email" onChange={this.updateEmailField} />
      </div>
    );
  }
}

export default Signup;
