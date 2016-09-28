import React from "react";
import {Link} from "react-router";

export default class Body extends React.Component {
  render(){
    return (
        <div className="container">
          {this.props.children}
        </div>
    );
  }
}
