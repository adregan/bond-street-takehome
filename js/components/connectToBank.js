import React from 'react';
import { institutions } from '../../config';
import { setInstitution } from '../actions';

const ConnectToBank = ({ dispatch }) => {
  return (
    <div className="connect">
      <h2 className="ui">Connect Bond Street to your bank</h2>
      <p>Connecting us to your primary business bank account gives us a clearer understanding of your finances.</p>
      <ul className="bank-list">
        {institutions.map((institution, i) => {
          return <li key={i} onClick={() => dispatch(setInstitution(institution.id))}>{institution.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ConnectToBank;

