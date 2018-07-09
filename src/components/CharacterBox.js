import React from 'react';

import Character from './Character';

const CharacterBox = (props) => {
    return(
        <div className="character-box">
            {props.characters.map( (character, index) => <Character index={index} character={character} checkCard={props.checkCard} key={character.name}/>)}
        </div>
    )
};

export default CharacterBox;

