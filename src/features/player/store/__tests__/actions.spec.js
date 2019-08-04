import actions from '../actions';

describe('Action Creator:', () => {
  it('should create markInAction', () => {
    const expectedAction = {
        type: 'weCliques-app/movies/MARK_IN',
        timeStamp: Math.round(30)
    }
    expect(actions.markInAction(30)).toEqual(expectedAction)
  });

  it('should create markOutAction', () => {
    const expectedAction = {
        type: 'weCliques-app/movies/MARK_OUT',
        timeStamp: Math.round(500),
    }
    expect(actions.markOutAction(500)).toEqual(expectedAction)
  });

  it('should create startPlaying', () => {
    const expectedAction = {
        type:'weCliques-app/movies/PLAY_VIDEO',
        vidID: 'ELeMaP8EPAA'    
    }
    expect(actions.startPlaying('ELeMaP8EPAA')).toEqual(expectedAction)
  });
});
