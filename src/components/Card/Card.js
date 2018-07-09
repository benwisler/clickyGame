import React from "react";
import CharacterGrid from "../CharacterGrid";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div>
        <div id="jumbo" className="jumbotron jumbotron-fluid">
          <div className="container">
          <h1 className="display-4">Clicky Game!</h1>
            <h2 className="display-4">Score: {this.props.user.score}</h2>
            <p className="lead">Top Score: {this.props.user.topScore}</p>
          </div>
        </div>
        </div>
      
        <CharacterGrid
          characters={this.props.characters}
          checkCard={this.props.checkCard}
        />
      </div>
    );
  }
}

export default Card;
