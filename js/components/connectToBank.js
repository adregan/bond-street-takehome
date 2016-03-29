import React from 'react';
import { setInstitution } from '../actions';
import Bank from './bank';

const ConnectToBank = ({ banks, dispatch }) => {
  return (
    <section className="connect">
      <p>Connecting us to your primary business bank account gives us a clearer understanding of your finances.</p>
      <ul className="banks-list">
        {banks.map((bank, i) => {
          return <Bank key={i} bank={bank} handleClick={(id) => dispatch(setInstitution(id))} />;
        })}
      </ul>
    </section>
  );
};

export default ConnectToBank;

