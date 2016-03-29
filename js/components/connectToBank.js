import React from 'react';
import { institutions } from '../../config';
import { setInstitution } from '../actions';

const ConnectToBank = ({ dispatch }) => {
  return (
    <section className="connect">
      <p>Connecting us to your primary business bank account gives us a clearer understanding of your finances.</p>
      <ul className="banks-list">
        {institutions.map((institution, i) => {
          return (
            <li className="banks-list__item" key={i} onClick={() => dispatch(setInstitution(institution.id))}>
              {institution.name}
            </li>
            );
        })}
      </ul>
    </section>
  );
};

export default ConnectToBank;

