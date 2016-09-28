import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class BetSlipStore extends EventEmitter{
  constructor(){
    super();
    this.betSlips = [
      {
        id: 111,
        name: "EPL",
        complete: false
      },
      {
        id: 113,
        name: "BTTS",
        complete: false
      }
    ];
  }

  createBetSlip(name){
    const id = Date.now();

    this.betSlips.push({
      id,
      name,
      complete: false
    });

    this.emit("change");
  }

  getAll(){
    return this.betSlips;
  }

  handleActions(action){
    console.log("Betslip store action: ", action);
    switch(action.type){
      case "CREATE_BETSLIP": {
        this.createBetSlip(action.name);
      }
    }
  }
}

const betSlipStore = new BetSlipStore();
dispatcher.register(betSlipStore.handleActions.bind(betSlipStore));

export default betSlipStore;
