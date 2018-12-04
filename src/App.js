import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    list: [
      { id: 1, name: "Buy Apples", complete: true },
      { id: 2, name: "Buy Grapes", complete: true },
      { id: 3, name: "Buy Oranges", complete: false }
    ]
  };

  renderList = () => {
    const { list } = this.state;
    return list.map(list => <li key={list.id}>{list.name}</li>);
  };

  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default App;
