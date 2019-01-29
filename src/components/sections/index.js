import React, { Component } from "react";

import styles from "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Sections extends Component {
  render() {
    return (
      <body>
        <div class="row mb-5">
          <div class="col">
            <h5 class="text-center">Sections</h5>
            <ul class="list-group mt-3">
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Funny</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>10</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Animals</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>17</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Anime/Manga</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>7</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Ask 9GAG</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>4</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>DIY Crafts</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>12</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Horror</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>6</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>K-pop</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>19</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Music</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>23</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Awesome</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>14</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Basketball</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>4</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Car</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>9</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Comic</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>7</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Cosplay</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>6</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>countryballs</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>7</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Classical Art</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>12</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Gaming</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>7</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Girl</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>17</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Guy</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>10</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>History</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>4</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Movie</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>15</small></span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between
                  align-items-center"
              >
                <a href="#" class="text-info">
                  <small>Relationship</small>
                </a>
                <span class="badge badge-primary badge-pill bg-info"><small>7</small></span>
              </li>
            </ul>
          </div>
        </div>
      </body>
    );
  }
}

export default Sections;

