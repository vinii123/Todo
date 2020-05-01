import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      inc: 1,
    };
  }
  changeHandle = () => {
    let inc = this.state.inc;
    ++inc;
    this.setState({ inc });
  };
  changeDechandle = () => {
    let inc = this.state.inc;
    --inc;
    console.log(inc);
    this.setState({ inc });
  };
  render() {
    const con = this.state.inc;
    return (
      <div>
        <h1> Counter Component : {con}</h1>
        <button onClick={this.changeHandle}> + </button>
        <button onClick={this.changeDechandle}> - </button>
      </div>
    );
  }
}
