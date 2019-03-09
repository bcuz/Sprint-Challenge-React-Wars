import React from 'react';

const Character = props => {
  return <li className='list-group-item'>{props.person.name}</li>
};

export default Character;