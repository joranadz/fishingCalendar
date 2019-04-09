import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../App.css";

class header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Žvejybos dienoraštis</p>
        </header>
      </React.Fragment>
    );
  }
}

export default header;
