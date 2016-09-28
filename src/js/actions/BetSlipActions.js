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
