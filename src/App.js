import React, { Component } from "react";

import { Route } from "react-router-dom";
// components
import Game from "./components/game/game";

import LeaderBoard from "./components/leaderBoard/leaderBoard";
import "./App.css";

class App extends Component {


  render() {
    return (
      <section className="App Site">
        {/* <Card /> */}
      <Route exact path="/" component={Game} />
      <Route exact path="/highScores" component={LeaderBoard} />

      </section>
    );
  }
}

export default App;
