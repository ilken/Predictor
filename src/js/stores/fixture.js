import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class FixtureStore extends EventEmitter{
  constructor(){
    super();
    this.fixtures = [];
  }

  updateFixtures(fixtures){
    const id = "match_" + Date.now();

    this.fixtures = fixtures[0].en;

    this.emit("change");
  }

  getAll(){
    return this.fixtures;
  }

  handleActions(action){
    //console.log("Match store action: ", action);
    switch(action.type){
      case "UPDATE_FIXTURES": {
        this.updateFixtures(action.fixtures);
        break;
      }
    }
  }
}

const fixtureStore = new FixtureStore();
dispatcher.register(fixtureStore.handleActions.bind(fixtureStore));

export default fixtureStore;
