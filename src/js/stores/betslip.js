import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class BetSlipStore extends EventEmitter{
  constructor()
  {
    super();
    this.betSlips = [
      {
        id: 1,
        name: "My Awesome Bet Slip",
        picks: [],
        complete: false
      }
    ];
  }

  createBetSlip(name)
  {
    const id = "betSlip_" + Date.now();

    this.betSlips.push({
      id,
      name,
      complete: false
    });

    this.emit("change");
  }

  updatePicks(action)
  {
    const id = action.key;
    const betSlipId = 0;

    if(this._pickExists(betSlipId, action.key))
    {
      this._removePick(betSlipId, action.key);
    }
    else
    {
      this.betSlips[betSlipId].picks.push({
        id,
        home : action.home,
        away : action.away,
        option : action.option,
        pick : action.pick
      });
    }

    this.emit("change");
  }

  _pickExists(betSlipId, pickId)
  {
    for(let pick of this.betSlips[betSlipId].picks)
    {
      if(pick.id === pickId)
      {
        return true;
      }
    }
    return false;
  }

  _removePick(betSlipId, pickId)
  {
    for(let i = 0; i < this.betSlips[betSlipId].picks.length; i++)
    {
      let pick = this.betSlips[betSlipId].picks[i];
      if(pick.id === pickId)
      {
        this.betSlips[betSlipId].picks.splice(i, 1);
      }
    }
  }

  getAll()
  {
    return this.betSlips;
  }

  handleActions(action)
  {
    //console.log("Betslip store action: ", action);
    switch(action.type)
    {
      case "CREATE_BETSLIP":
      {
        this.createBetSlip(action.name);
      }
      case "BET_OPTION_SELECTED":
      {
        this.updatePicks(action);
        console.log(action);
      }
    }
  }

}

const betSlipStore = new BetSlipStore();
dispatcher.register(betSlipStore.handleActions.bind(betSlipStore));

export default betSlipStore;
