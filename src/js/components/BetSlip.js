import React from "react";

export default class BetSlips extends React.Component {
  render(){
    const {name, complete} = this.props;
    const icon = complete ? "\u2714" : "\u2716"

    return (
      <li>
        <span>{name}</span>
        <span>{icon}</span>
      </li>
    );
  }
}
