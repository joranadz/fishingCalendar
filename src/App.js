import React, { Component } from "react";
// import "./App.css";
import SimpleMap from "./components/map";
import Footer from "./components/footer";
import MainBar from "./components/main";
import SubmitData from "./components/main/submit";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SimpleMap />
        <MainBar />
        <Footer />
        <SubmitData />
      </React.Fragment>
    );
  }
}

export default App;
