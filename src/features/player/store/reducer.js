import types from './constants';

const initialState = {
    selectedMovie: 'ELeMaP8EPAA',
    segmentStart: 0,
    segmentEnd: null,
};

export default (state = initialState, actions = {}) => {
  switch (actions.type) {
    case types.MARK_IN: {
      return {
        ...state,
        segmentStart: actions.timeStamp,
      }
    }
    default:

      return state;
  }
};
