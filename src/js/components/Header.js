import React from "react";
import {Link} from "react-router";

export default class Header extends React.Component {
  render(){
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top top-nav-collapse" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Tracker</a>
          </div>

          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
              <li class="hidden">
                <a class="nav-item" href="/"></a>
              </li>
              <li class="">
                <Link to="settings" class="nav-item">Settings</Link>
              </li>
            </ul>
          </div>
          </div>
      </nav>
    );
  }
}
