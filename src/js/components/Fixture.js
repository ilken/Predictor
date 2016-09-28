import React from "react";

export default class Fixture extends React.Component {
  render(){
    const {date, team1, team2, score1, score2} = this.props;

    return (
      <li>
        <span>{team1.name}</span>
        <span> {score1} </span>
        <span> {score2} </span>
        <span>{team2.name}</span>
      </li>
    );
  }
}
