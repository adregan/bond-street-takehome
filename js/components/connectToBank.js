import React from 'react';
import { institutions } from '../../config';
import { setInstitution } from '../actions';

const ConnectToBank = ({ dispatch }) => {
  return (
    <ul className="connect">
      {institutions.map((institution, i) => {
        return <li key={i} onClick={() => dispatch(setInstitution(institution.id))}>{institution.name}</li>;
      })}
    </ul>
  );
};

export default ConnectToBank;

