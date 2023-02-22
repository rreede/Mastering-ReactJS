import { useState } from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "123",
        },
        {
          name: "Frank",
          id: "123453",
        },
        {
          name: "Jacky",
          id: "34235325",
        },
        {
          name: "Andrei",
          id: "34325stg",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
