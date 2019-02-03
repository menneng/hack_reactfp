import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Hot from "./pages/hot";
import Favorit from "./pages/favorit";
import Welcome from "./pages/welcome";

import LoginPage from "./pages/loginpage";

import {Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/pages/hot" component={Hot} />
          <Route path="/pages/loginpage" component={LoginPage}/>
          <Route path="/pages/favorit" component={Favorit} />
        {/* <Switch>
        </Switch> */}
      </div>
    );
  }
}

export default App;
