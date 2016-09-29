import React from "react";

export default class Fixture extends React.Component {
  expandOptions(e){
    var button = e.target;
    //$('.betOptions').hide(0);
    //$(button).closest(".row").find('.betOptions').show(0);
    $(button).closest(".row").find('.betOptions').toggle(500);
  }

  render(){
    const betOptionStyle = {
      display: 'none'
    };

    const {date, team1, team2, score1, score2} = this.props;

    return (
      <div class="row">
        <div class="matchInfo" onClick={this.expandOptions.bind(this)}>
          <div class="col-md-4">{team1.name}</div>
          <div class="col-md-1">{score1}</div>
          <div class="col-md-1">-</div>
          <div class="col-md-1">{score2}</div>
          <div class="col-md-4">{team2.name}</div>
          <div class="col-md-1">
            <button class="btn btn-success" type="button">+</button>
          </div>
        </div>
        <div class="betOptions" style={betOptionStyle}>
          <div class="col-md-12">
            <div>Hidden Options</div>
              <div>Hidden Options</div>
                <div>Hidden Options</div>
                  <div>Hidden Options</div>
                    <div>Hidden Options</div>
                      <div>Hidden Options</div>
                        <div>Hidden Options</div>
          </div>
        </div>
      </div>
    );
  }
}
