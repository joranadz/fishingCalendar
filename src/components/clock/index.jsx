import React from "react";
import Clock from "react-live-clock";

class CurentTime extends React.Component {
  render() {
    return <Clock format={"HH:mm:ss"} ticking={true} timezone={"Etc/GMT-3"} />;
  }
}
export default CurentTime;
