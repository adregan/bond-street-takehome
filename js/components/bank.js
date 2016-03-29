import React from 'react';

const Bank = ({bank, handleClick}) => {
  return (
    <li className="banks-list__item" onClick={() => handleClick(bank.id)}>
      <img src={bank.logo} alt={bank.name} />
    </li>
  );
};

export default Bank;

