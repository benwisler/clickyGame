import React from 'react';
import "./Character.css"
class Character extends React.Component {

    handleClick = (e) => {
        // this.checkCard;s
        // e.preventDefault();
        this.props.checkCard(this.props.character.image);
        console.log(this.props.character.image)
    }

    render()
    { 
        return(

            <div >
                <img 
                    id= "border"
                    src={this.props.character.image} 
                    alt="character" 
                    onClick={this.handleClick}/>
            </div>

    )
    }
}
export default Character;