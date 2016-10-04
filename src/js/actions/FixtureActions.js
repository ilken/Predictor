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
