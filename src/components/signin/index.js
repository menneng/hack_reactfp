import React, { Component } from "react";


import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from "react-router-dom";




  
  class SignIn extends React.Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      )
    }
  
  }

  export default SignIn;