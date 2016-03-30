import React from 'react';
import { connect } from 'react-redux';
import { banks } from '../../config';
import ConnectToBank from './connectToBank';
import Success from './success';
import Modal from './modal';
import { changeRoute } from '../actions';

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { dispatch, route, loading, institution, error } = this.props;
    return (
      <section className="app">
        <header className="app__header">
          <h2>Connect Bond Street to your bank</h2>
        </header>
        {(() => {
          switch (route) {
            case 'success':
              return <Success />;
            case 'login':
              return (
                <div>
                  <Modal state='login' {...this.props} />
                  <ConnectToBank banks={banks} dispatch={dispatch} />
                </div>
              );
            case 'routing':
              return (
                <div>
                  <Modal state='routing' {...this.props} />
                  <ConnectToBank banks={banks} dispatch={dispatch} />
                </div>
              );
            default:
              return <ConnectToBank banks={banks} dispatch={dispatch} />;
          }
        })()}
      </section>
    );
  }
}

const select = (state) => {
  return {
    institution: state.institution,
    route: state.route,
    loading: state.loading,
    error: state.error,
    loginFields: state.loginFields
  };
};

export default connect(select)(App);
