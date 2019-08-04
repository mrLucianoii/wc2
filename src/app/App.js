import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { isLoadingAction as actions } from "../store/actions";
import Player from "../features/player/Player";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

class App extends Component {
  componentDidMount() {
    const { loaderAction } = this.props;
    loaderAction();
  }
  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        {!loading && <h1>Loading...</h1>}
        {loading && (
          <Fragment>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              WeCliques say's, "Hello World"
              <Player />
            </header>
          </Fragment>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.featureReducer.isLoading
  }),
  dispatch => ({
    loaderAction: () => dispatch(actions())
  })
)(App);
