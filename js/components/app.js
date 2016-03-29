import React from 'react';
import { connect } from 'react-redux';
import ConnectToBank from './connectToBank';

const App = ({dispatch}) => {
  return (
    <section className="app">
      <header className="app__header">
        <h2>Connect Bond Street to your bank</h2>
      </header>
    </section>
  );
};

const select = (state) => {
  return {
    institution: state.institution
  };
};

export default connect(select)(App);
