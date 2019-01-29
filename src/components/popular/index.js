import React, { Component } from "react";

import styles from "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

class Popular extends Component {
  render() {
    return (
      <body>
        <div class="row mb-5">
          <div class="col">
            <h5 class="text-center">Popular</h5>
            <ul class="list-group mt-3">
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                {/* <a href="../../pages/hot" class="text-info">
                  <small>Hot</small>
                </a> */}

                <Link to= "/pages/hot"><small>Hot</small></Link> 



                <span class="badge badge-primary badge-pill bg-info">
                  <small>10</small>
                </span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Trending</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info">
                  <small>17</small>
                </span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Fresh</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info">
                  <small>7</small>
                </span>
              </li>
            </ul>

          </div>
        </div>

      
      </body>

    );
  }


}


export default Popular;
