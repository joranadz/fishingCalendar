import React, { Component } from "react";
// import "./App.css";
import SimpleMap from "./components/map";
import Footer from "./components/footer";
import SubmitData from "./components/main/submit";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SimpleMap />
        <SubmitData />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
