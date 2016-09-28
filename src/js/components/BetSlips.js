import React from "react";
import BetSlip from "./BetSlip";
import BetSlipStore from "../stores/betslip";
import * as BetSlipActions from "../actions/BetSlipActions";

export default class BetSlips extends React.Component {
  constructor(){
    super();
    this.state = {
      betSlips: BetSlipStore.getAll()
    };
  }

  componentWillMount(){
    BetSlipStore.on("change", () => {
      this.setState({
        betSlips: BetSlipStore.getAll()
      });
    });
  }

  createBetSlip(e){
    const betSlipName = document.getElementById("betSlipName");
    if(betSlipName.value){
      BetSlipActions.createBetSlip(betSlipName.value);
      betSlipName.value = "";
    }
  }

  render(){
    const {betSlips} = this.state;

    const BetSlipComponents = betSlips.map((betSlip) => {
      return <BetSlip key={betSlip.id} {...betSlip}/>;
    });

    return (
      <div>
        <h1>List</h1>
        <div class="input-group">
          <input id="betSlipName" type="text" class="form-control" placeholder="New Betslip name..."/>
          <span class="input-group-btn">
            <button class="btn btn-success" type="button" onClick={this.createBetSlip.bind(this)}>Add</button>
          </span>
        </div>
        <ul>{BetSlipComponents}</ul>
      </div>
    );
  }
}
