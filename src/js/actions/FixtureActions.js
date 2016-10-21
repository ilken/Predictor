import dispatcher from "../dispatcher";

export function loadFixtures(){

}

export function updateFixtures(snapshot){
  //console.log("Snapshot: ", snapshot);
  dispatcher.dispatch({
    type: "UPDATE_FIXTURES",
    fixtures: snapshot,
  });
}

export function selectBetOption(selection){
  let [home, away, option, pick] = selection.split('-');
  dispatcher.dispatch({
    type: "BET_OPTION_SELECTED",
    key : selection,
    home,
    away,
    option,
    pick
  });
}
