import React from "react";
import { Provider } from "react-redux";
import store from "../../../store";
import renderer from "react-test-renderer";
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Player from "../Player";
import YouTube from "react-youtube";

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {
    selectedMovie: 'ELeMaP8EPAA'
  }

  const enzymeWrapper = mount( <Provider store={store()}>
  <Player {...props}/>
</Provider>)

  return {
    props,
    enzymeWrapper
  }
}

describe("Embeded Youtube Player", () => {
  it("Matches Snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store()}>
            <Player />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Receives default props", () => {
    const { enzymeWrapper } = setup()
    const selectedMovie = enzymeWrapper.find(Player).props()
    expect(selectedMovie).toStrictEqual({selectedMovie: 'ELeMaP8EPAA'})
  })

  it("YouTube component receives default movie id", () => {
    const { enzymeWrapper } = setup()
    const PlayerWrapper = enzymeWrapper.find(Player)
    const YouTubeWrapper = PlayerWrapper.find(YouTube).props()

    expect(YouTubeWrapper.videoId).toStrictEqual('ELeMaP8EPAA');
  })
});
