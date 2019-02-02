import React, { Component } from "react";
import SignIn from "../../components/signin";
import NavBar from "../../components/navbar";
import Popular from "../../components/popular";
import Sections from "../../components/sections";

import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from "react-router-dom";

const Sdatang = ({ user, onSignOut }) => {
  // This is a dumb "stateless" component
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>
        Sign out
      </a>
    </div>
  );
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // the initial application state
    this.state = {
      user: null
    };
  }

  // App "actions" (functions that modify state)
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password
      }
    });
  }

  signOut() {
    // clear out user from state
    this.setState({ user: null });
  }

  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
      <div class="container">
        <header>
          <div class="row">
            <div class="col-12">
              <NavBar />
            </div>
          </div>
        </header>

        <body>
          <div class="row">
            <div class="col-3">
              <div class="row-3">
                <Popular />
              </div>
              <div class="row-3">
                <Sections />
              </div>
            </div>
            <div class="col text-center">
              <br />

              <h1>HALO</h1>

              <br />
              {this.state.user ? (
                <Sdatang
                  user={this.state.user}
                  onSignOut={this.signOut.bind(this)}
                />
              ) : (
                <SignIn onSignIn={this.signIn.bind(this)} />
              )}
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default LoginPage;
