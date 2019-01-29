import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Popular from "../../components/popular";
import Sections from "../../components/sections";
import Content from "../../components/content";

class Welcome extends Component {
  render() {
    return (
      <div class="container">

      <header>
        <div class="row">
          <div class="col-12"><NavBar /></div>
        </div>
      </header>
        <br></br>
      
      <body>
          <h1 class="text-center">Selamat datang,BUDI</h1>
          <br></br>

          <img class="rounded mx-auto d-block" src={ require('../../img/people11.jpg') } />

        </body>
      </div>
    );
  }
}

export default Welcome;