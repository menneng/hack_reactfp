import React, { Component } from "react";


import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  Redirect
  // etc.
} from "react-router-dom";





  class SignIn extends React.Component {
 

    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <input type="text" name="username" placeholder="enter you username" />
          <input type="password" name="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      )

    }


  }

  export default SignIn;