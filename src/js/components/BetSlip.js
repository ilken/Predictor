import React from "react";

export default class BetSlips extends React.Component {
  render(){
    const {name} = this.props;

    return (
      <li>
        <span>{name}</span>
      </li>
    );
  }
}
