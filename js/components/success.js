import React from 'react';

const Success = () => {
  return (
    <section className="success">
      <img src="/static/icon_bank_connected.png" />
      <h3 className="success__heading">You've successfully connected your Bank</h3>
      <p className="success__details">When you are approved for your loan, Bond Street will use your bank for payments. You can change this later once you are approved.</p>
    </section>
  );
};

export default Success;
