import React, { Component } from "react";
import SideBar from "../components/SideBar";

import "./App.css";

export default class App extends Component {
  state = {
    data: {
      userName: "The Void ツ.",
      toDoLists: {
        0: { name: "shopping", tasks: [] },
        1: { name: "shopping", tasks: [] },
      },
    },
    currentListId: -1,
  };

  componentDidMount = () => {
    this.setState({ currentListId: 0 });
  };

  onAddList = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      this.setState(
        ({ data }) => {
          const { toDoLists } = data;
          let lastId = -1;

          const toDoListsKeys = Object.keys(toDoLists);
          const toDoListsLen = toDoListsKeys.length;

          if (toDoListsLen !== 0) {
            lastId = toDoListsKeys[toDoListsLen - 1];
          }

          toDoLists[parseInt(lastId) + 1] = {
            name: e.target.value.trim(),
            tasks: [],
          };
          return { data };
        },
        () => {
          e.target.value = "";
        }
      );
    }
  };

  onListClick = (e) => {
    const el = e.target;
    // set as select
    el.parentNode.childNodes.forEach((e) => {
      e.setAttribute("class", "menuItem");
    });
    el.classList.toggle("menuItem--active");

    // get the id
    const listId = el.id;

    //set currentListId on new id
    this.setState({ currentListId: listId });
    console.log("you are in " + listId);
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <SideBar
          data={data}
          onAddList={this.onAddList}
          onListClick={this.onListClick}
        />
      </div>
    );
  }
}
