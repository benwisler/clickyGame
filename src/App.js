import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import getPicture from "./components/Deck"
class App extends Component {
  
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>

        <Card image={this.state.image} />
      </div>
    );
  }
}

export default App;
