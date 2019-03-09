import React from 'react';
import Terrier from './Terrier';

const TerrierList = props => {
  return (
    <ul className='list-group'>
      {props.terriers.map(terrier => <Terrier terrier={terrier} />)}
    </ul>
  );
};

export default TerrierList;