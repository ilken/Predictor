import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Body children={this.props.children}/>
      </div>
    );
  }
}
