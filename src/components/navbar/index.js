import React, { Component } from "react";

import styles from "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Login from "../login";

class NavBar extends Component {
  render() {
    return (
      <body>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            9GAG
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav1"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav1">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Get Apps!!
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  League of Legend
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  K-pop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Join Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Funoff Contest
                </a>
              </li>
            </ul>
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              />
              <button class="btn btn-danger my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>

            <ul>
              <Login />
            </ul>
          </div>
        </nav>
      </body>
    );
  }
}

export default NavBar;
