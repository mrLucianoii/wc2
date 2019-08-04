import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../app/App";
import Player from '../features/player/Player';
import store from "../store";
import { ThemeProvider } from "react-jss";

import theme from "../app/themeStyles";

const styles = () => ({
  ...theme
});

export default function () {
  return (
    <Provider store={store()}>
      <ThemeProvider theme={styles}>
        <Router>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/player" component={Player} />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
