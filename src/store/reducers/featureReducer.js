import { isLoading as actions, LOADING_APP } from '../actions';
const initialState = {
  isLoading: false,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case LOADING_APP : {
      return {
        ...state,
        isLoading: actions.data,
      }
    }
    default:
      return state;
  }
};
