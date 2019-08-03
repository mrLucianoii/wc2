import {isLoadingAction, LOADING_APP} from '../actions';

describe('Action Creator:', () => {
  it('should create isLoadingAction', () => {
    const expectedAction = {
      type: LOADING_APP,
      data: true,
    }
    expect(isLoadingAction()).toEqual(expectedAction)
  });
});
