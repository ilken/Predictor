import React from "react";
import BetSlipPick from "./BetSlipPick";

export default class BetSlip extends React.Component {
  render(){
    const {name, picks} = this.props;

    const BetSlipPicksComponents = picks.map((pick) =>
    {
      return <BetSlipPick key={pick.id} {...pick}/>;
    });

    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h3>{name}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
              {BetSlipPicksComponents}
          </div>
        </div>
      </div>
    );
  }
}
