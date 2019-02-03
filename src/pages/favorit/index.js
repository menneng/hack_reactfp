import React, { Component } from "react";
import NavBar from "../../components/navbar";
import FavContent from "../../components/favcontent";
import Popular from "../../components/popular";
import Sections from "../../components/sections";

class Favorit extends Component {
  render() {
    return (
      <div class="container">
        <header>
          <div class="row">
            <div class="col-12">
              <NavBar />
            </div>
          </div>
        </header>
        <br />

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

            <div class="col">
            <h1 class="text-center">MY FAVORIT</h1>
            <div class="row-12">
              <FavContent />
            </div>
          </div>

          
          </div>
        </body>
      </div>
    );
  }
}

export default Favorit;
