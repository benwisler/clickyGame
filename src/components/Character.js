import React from 'react';

class Character extends React.Component {

    handleClick = (e) => {
        // this.checkCard;
        e.preventDefault();
        alert("clicked")
        this.props.checkCard(this.props.index);
    }

    render()
    { 
        return(

            <div>
                <img 
                    
                    src={this.props.character.image} 
                    alt="character" 
                    className="profile-pic"
                    onClick={this.handleClick}/>
            </div>

    )
    }
}
export default Character;