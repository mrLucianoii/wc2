import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Router, { NoMatch } from '../index';
import App from '../../app/App';
import Player from '../../features/player/Player';
import renderer from "react-test-renderer";
import { Route } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })

let pathMap = {};
describe('404 Page:', () => {
    it('Mounts', () => {

        const page404 = renderer.create(<NoMatch />).toJSON();
        expect(page404).toMatchSnapshot();
    })
});

describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Router/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
  })
  it('should show Home component for / router (getting array of routes)', () => {

    expect(pathMap['/']).toBe(App);
  })
  it('should show YouTube player for /player router', () => {
    expect(pathMap['/player']).toBe(Player);
  })
  it('should show No match component for route not defined', ()=>{
      expect(pathMap['undefined']).toBe(NoMatch);
  })
})