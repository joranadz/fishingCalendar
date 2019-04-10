import React, { Component } from "react";

class EnteredItems extends Component {
  createEntres(item) {
    return (
      <li key={item.key} className="list-group-item">
        {item.text}
      </li>
    );
  }
  render() {
    let submitEntreis = this.props.entries;
    let listItems = submitEntreis.map(this.createEntres);
    return <ul>{listItems}</ul>;
  }
}

export default EnteredItems;
