import React, { Component } from "react";
import NavBar from "../../components/navbar";
import HotContent from "../../components/hotcontent";

class Hot extends Component {
  render() {
    return (
      <div class="container">
      <header>
        <div class="row">
          <div class="col-12"><NavBar /></div>
        </div>
      </header>
        <br />
      
      <body>
      <h1 text-align="center">HOT</h1>
        <div class="row-12"><HotContent /></div>
      </body>
      </div>
    );
  }
}

export default Hot;