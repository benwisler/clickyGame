import React from "react";
import CharacterBox from "./../CharacterBox";
import "./Card.css"

class Card extends React.Component {


  render() {
    return (
      <div>
        				<p>
					Top Score: {this.props.user.topScore}
				</p>
				<p>
					Score: {this.props.user.score}
				</p>
        <CharacterBox
          characters={this.props.characters}
          checkCard={this.props.checkCard}
        />
      </div>
    );
  }
}

export default Card;
