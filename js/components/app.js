import React from 'react';
import { connect } from 'react-redux';
import ConnectToBank from './connectToBank';

const App = ({dispatch}) => {
  return <ConnectToBank dispatch={dispatch} />;
};

const select = (state) => {
  return {
    institution: state.institution
  };
};

export default connect(select)(App);
