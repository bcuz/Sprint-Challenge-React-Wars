import React from 'react';
import Character from './Character';

const CharacterList = props => {
  return (
    <ul className='list-group'>
      {props.characters.map((char,i) => <Character index={i} name={char.name} />)}
    </ul>
  );
};

export default CharacterList;