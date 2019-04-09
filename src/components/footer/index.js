import React, { Component } from "react";
import CurentTime from "../clock";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";

class footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="btn btn-dark dateTime">
          <CurentTime />
        </div>
      </React.Fragment>
    );
  }
}

export default footer;
