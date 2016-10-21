import React from "react";
import * as FixtureActions from "../actions/FixtureActions";

export default class Fixture extends React.Component {
  expandOptions(e)
  {
    var button = e.target;
    $(button).closest(".fixture").find('.betOptions').toggle(500);
  }

  selectBetOption(e){
    const button = e.target;
    const isSelected = $(button).hasClass("selected");
    //To Do: Send actual team name
    FixtureActions.selectBetOption(e.target.id);

    if(isSelected){
      $(button).removeClass("selected");
    }
    else{
      //$(button).closest(".betOptions").find('.btn').removeClass("selected");
      $(button).addClass("selected");
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render(){
    const betOptionStyle = {
      display: 'none'
    };

    const {date, team1, team2, score1, score2} = this.props;

    return (
      <div id={team1.name + "-" + team2.name} class="container-fluid fixture">
        <div class="row matchInfo" onClick={this.expandOptions.bind(this)}>
          <div class="col-md-4 col-sm-4 col-xs-4 homeTeam">{team1.name}</div>
          <div class="col-md-1 col-sm-1 col-xs-1 homeScore">{score1}</div>
          <div class="col-md-1 col-sm-1 col-xs-1 scoreSeperator">-</div>
          <div class="col-md-1 col-sm-1 col-xs-1 awayScore">{score2}</div>
          <div class="col-md-4 col-sm-4 col-xs-4 awayTeam">{team2.name}</div>
          <div class="col-md-1 col-sm-1 col-xs-1 optionsBtn">
            <button class="btn btn-success" type="button">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="row betOptions" style={betOptionStyle}>
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="row betOption">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <span>Full Time Result</span>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4">
                <button id={team1.key + "-" + team2.key + "-fulltime-home"} type="button" class="btn btn-block btn-secondary" onClick={this.selectBetOption.bind(this)}>Home</button>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4">
                <button id={team1.key + "-" + team2.key + "-fulltime-draw"} type="button" class="btn btn-block btn-secondary" onClick={this.selectBetOption.bind(this)}>Draw</button>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4">
                <button id={team1.key + "-" + team2.key + "-fulltime-away"} type="button" class="btn btn-block btn-secondary" onClick={this.selectBetOption.bind(this)}>Away</button>
              </div>
            </div>

            <div class="row betOption">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <span>Both Teams to Score</span>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6">
                <button id={team1.key + "-" + team2.key + "-btts-yes"} type="button" class="btn btn-block btn-secondary" onClick={this.selectBetOption.bind(this)}>Yes</button>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6">
                <button id={team1.key + "-" + team2.key + "-btts-no"} type="button" class="btn btn-block btn-secondary" onClick={this.selectBetOption.bind(this)}>No</button>
              </div>
            </div>

            <div class="row betOption">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <span>Total Goals</span>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6">
                <button id={team1.key + "-" + team2.key + "-totalgoals-o2.5"} type="button" class="btn btn-block btn-secondary" onClick={this.selectBetOption.bind(this)}>Over 2.5</button>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6">
                <button id={team1.key + "-" + team2.key + "-totalgoals-u2.5"} type="button" class="btn btn-block btn-secondary" onClick={this.selectBetOption.bind(this)}>Under 2.5</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
