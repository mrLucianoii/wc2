import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import { Provider } from "react-redux";
import store from "../store";
import App from "./App";
import renderer from "react-test-renderer";
import theme from "./themeStyles";

const styles = () => ({
  ...theme
});

describe("App's core rendering tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store()}>
        <ThemeProvider theme={styles}>
          <App />
        </ThemeProvider>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders correctly :)", () => {
    const tree = renderer
      .create(
        <Provider store={store()}>
          <ThemeProvider theme={styles}>
            <App />
          </ThemeProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
