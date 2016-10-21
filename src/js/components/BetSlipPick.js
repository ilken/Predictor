import React from "react";

export default class BetSlipPick extends React.Component {
  render(){
    const {home, away, option, pick} = this.props;

    return (
        <div class="row">
          <div class="col-md-3">
            <span>{home}</span>
          </div>
          <div class="col-md-3">
            <span>{away}</span>
          </div>
          <div class="col-md-3">
            <span>{pick}</span>
          </div>
        </div>
    );
  }
}
