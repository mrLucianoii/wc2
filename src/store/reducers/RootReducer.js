import { combineReducers } from 'redux';
import featureReducer from './featureReducer';
import playerReducer from '../../features/player/store/reducer'

export default combineReducers({
  featureReducer,
  playerReducer,
});
