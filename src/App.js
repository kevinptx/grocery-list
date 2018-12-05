import React, { Component } from "react";
import List from "./List";
import ListForm from "./ListForm";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { lists: [] };

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = name => {
    const { lists } = this.state;
    const list = { name, id: this.getUniqId(), complete: false };
    this.setState({ lists: [list, ...lists] });
  };

  handleClick = id => {
    const { lists } = this.state;
    this.setState({
      lists: lists.map(list => {
        if (list.id === id) {
          return {
            ...list,
            complete: !list.complete
          };
        }
        return list;
      })
    });
  };

  render() {
    const { lists } = this.state;
    return (
      <div>
        <ListForm addItem={this.addItem} />
        <List name="Grocery List" items={lists} />
      </div>
    );
  }
}

export default App;
