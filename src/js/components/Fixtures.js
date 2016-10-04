import React from "react";
import FixtureStore from "../stores/fixture";
import Fixture from "./Fixture";
import * as FixtureActions from "../actions/FixtureActions";
import {initFireBaseConfig} from "../firebase"

export default class Fixtures extends React.Component {
  constructor(){
    super();
    this.state = {
      fixtures: FixtureStore.getAll()
    };
  }

  componentWillMount(){
    initFireBaseConfig();

    const db = firebase.database();
    const dbRef = db.ref().child('matches');

    dbRef.on('value', snapshot => {
      //console.log(snapshot.val());
      FixtureActions.updateFixtures(snapshot.val());
    });

    FixtureStore.on("change", () => {
      this.setState({
        fixtures: FixtureStore.getAll()
      });
    });
  }

  render(){
    const {fixtures} = this.state;

    const FixtureComponents = fixtures.map((fixture) => {
      return <Fixture key={fixture.team1.key + fixture.team2.key} {...fixture}/>;
    });

    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 col-sm-8 col-xs-8">
              <span>Fixtures</span>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4">
              <button class="btn btn-danger" type="button">
                <span>
                  <i class="fa fa-caret-square-o-up" aria-hidden="true"></i> Collapse
                </span>
              </button>
            </div>
          </div>
        </div>
        {FixtureComponents}
      </div>
    );
  }
}
