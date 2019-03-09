import React from 'react';

const Character = props => {
  return <li className={`${(props.index % 2 === 0) ? 'list-group-item-info' : ''} list-group-item`}>{props.person.name}</li>
};

export default Character;