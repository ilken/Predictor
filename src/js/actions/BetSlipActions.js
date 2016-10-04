import dispatcher from "../dispatcher";

export function createBetSlip(name){
  dispatcher.dispatch({
    type: "CREATE_BETSLIP",
    name,
  });
}

export function deleteBetSlip(id){
  dispatcher.dispatch({
    type: "DELETE_BETSLIP",
    id,
  });
}

export function addBet(fixtureId, selectedBet){
  console.log("Fixture ID: ", fixtureId);
  console.log("Selected Bet: ", selectedBet);
  dispatcher.dispatch({
    type: "BET_OPTION_SELECTED",
    selectedBet,
  });
}

export function removeBet(fixtureId, selectedBet){
  console.log("Fixture ID: ", fixtureId);
  console.log("Selected Bet: ", selectedBet);
  dispatcher.dispatch({
    type: "BET_OPTION_DESELECTED",
    selectedBet,
  });
}
