import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./pages/Layout.js"
import App from "./pages/App.js"
import Settings from "./pages/Settings.js"

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}></IndexRoute>
      // <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
