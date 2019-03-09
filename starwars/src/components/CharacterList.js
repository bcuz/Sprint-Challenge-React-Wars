import React from 'react';
import Character from './Character';

const CharacterList = props => {
  return (
    <ul className='list-group'>
      {props.characters.map(char => <Character person={char} />)}
    </ul>
  );
};

export default CharacterList;