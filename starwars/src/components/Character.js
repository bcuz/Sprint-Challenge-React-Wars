import React from 'react';

const Character = props => {
  let highlight = (props.index % 2 === 0) ? 'list-group-item-info' : ''
  return <li className={`${highlight} list-group-item`}>{props.name}</li>
};

export default Character;