import React from 'react';
import { connect } from 'react-redux';
import { banks } from '../../config';
import ConnectToBank from './connectToBank';
import Success from './success';
import { changeRoute } from '../actions';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount () {
    window.addEventListener('hashchange', () => {
      const route = location.hash.replace(/\/|\#/g, '');
      return this.props.dispatch(changeRoute(route));
    });
  }
  render () {
    const {dispatch, route} = this.props;
    return (
      <section className="app">
        <header className="app__header">
          <h2>Connect Bond Street to your bank</h2>
        </header>
        {(() => {
          switch (route) {
            case 'success':
              return <Success />;
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
    error: state.error
  };
};

export default connect(select)(App);
