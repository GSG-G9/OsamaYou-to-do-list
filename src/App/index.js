import React, { Component } from "react";
import SideBar from "../components/SideBar";
import MainSide from "../components/MainSide";

import "./App.css";

export default class App extends Component {
  state = {
    data: {
      userName: "The Void ツ.",
      toDoLists: {
        // 0: {
        //   name: "shopping",
        //   tasks: [
        //     { value: "sds1", isCompleat: false },
        //     { value: "sds2", isCompleat: true },
        //     { value: "sds3", isCompleat: false },
        //     { value: "sds4", isCompleat: false },
        //   ],
        // },
        // 1: { name: "shopping", tasks: [{ value: "sds", isCompleat: false }] },
      },
    },
    currentListId: 0,
  };

  componentDidMount = () => {
    this.setState({ currentListId: 0 });
  };

  // side Bar handler listener
  onAddList = (e) => {
    if (e.key === "Enter" && e.target.value.trim !== "") {
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

  // ToDo List handler listener
  onRemoveTask = (e) => {
    const task = e.target.parentNode;
    this.state.data.toDoLists[this.state.currentListId].tasks.splice(
      task.id,
      1
    );
    this.setState((preState) => {
      console.log({ task });

      return { data: preState.data };
    });
  };

  onAddTask = (e) => {
    const value = e.target.value.trim();
    if (e.key === "Enter" && value !== "") {
      this.setState(
        (preState) => {
          const { data } = preState;
          const { currentListId } = this.state;

          if (currentListId !== -1) {
            data.toDoLists[currentListId].tasks.push({
              value,
              isCompleat: false,
            });
          }
          return {
            data,
          };
        },
        () => {
          console.log(this.state.data);
          e.target.value = "";
        }
      );
    }
  };

  onCompleteTask = (e) => {
    const task = e.target;
    task.classList.toggle("task-complete");
  };

  // rendering tha app
  render() {
    const {
      state,
      onAddList,
      onListClick,
      onRemoveTask,
      onAddTask,
      onCompleteTask,
    } = this;
    const { data, currentListId } = state;
    return (
      <div className="app">
        <SideBar data={data} onAddList={onAddList} onListClick={onListClick} />
        <MainSide
          onRemoveTask={onRemoveTask}
          onAddTask={onAddTask}
          onCompleteTask={onCompleteTask}
          toDoList={data.toDoLists[currentListId]}
        />
      </div>
    );
  }
}
