import React from 'react';

class Character extends React.Component {

    handleClick = () => {
        this.props.checkCard(this.props.index);
    }

    render()
    { 
        return(

            <div className="character">
                <img 
                    src={this.props.character.image} 
                    alt="character" 
                    className="profile-pic"
                    onClick={this.checkCard}/>
            </div>

    )
    }
}
export default Character;