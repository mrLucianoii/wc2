import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLoadingAction as actions } from './store/actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    const { loaderAction } = this.props;
    loaderAction();
  }
  render() {
    const { loading } = this.props;
    return (
      <div className="App">
      {!loading && <h1>Loading...</h1>}
       {loading && <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          WeCliques say's, "Hello World"
        </header>}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.featureReducer.isLoading,
  }),
  (dispatch) => ({
    loaderAction: () => dispatch(actions()),
  })
)(App);
