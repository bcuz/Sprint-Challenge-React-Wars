import React from 'react';
import Character from './Character';

const List = props => {
  return (
    <ul className='list-group'>
      {props.characters.map(char => <Character person={char} />)}
    </ul>
  );
};

export default List;