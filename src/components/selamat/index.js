import React, { Component } from "react";

class Selamat extends Component {
  render() {
    return (
      <div>
        <h1>
          Selamat datang <strong>{this.props.user.username}</strong>
        </h1>
      </div>
    );
  }
}

export default Selamat;