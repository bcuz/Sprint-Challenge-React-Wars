import React from 'react';
import Character from './Character';

const List = props => {
  return (
    <div>
      {props.characters.map(char => <Character person={char} />)}
    </div>
  );
};

export default List;