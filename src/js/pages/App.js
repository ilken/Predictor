import React from "react";
import BetSlips from "../components/Betslips";
import Fixtures from "../components/Fixtures";

export default class App extends React.Component {
  render(){
    return (
      <div class="row">
        <div class="col-md-8">
          <Fixtures/>
        </div>
        <div class="col-md-4">
          <BetSlips/>
        </div>
      </div>
    );
  }
}
