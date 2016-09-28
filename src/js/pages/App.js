import React from "react";
import BetSlips from "../components/Betslips";

export default class App extends React.Component {
  render(){
    return (
      <div class="row">
        <div class="col-md-8">
          <h1>App</h1>
        </div>
          <div class="col-md-4">
            <BetSlips/>
          </div>
      </div>
    );
  }
}
