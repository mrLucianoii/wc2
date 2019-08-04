import types from './constants';

function markInAction(milliseconds){
  return {
    type: types.MARK_IN,
    timeStamp: Math.round(milliseconds)
  }
}

function markOutAction(milliseconds){
  return {
    type: types.MARK_OUT,
    timeStamp: Math.round(milliseconds)
  }
}

function startPlaying(videoID) { // event passed onReady at component render
    return {
        type: types.PLAY_VIDEO,
        vidID: videoID
      }
  }
  
export default {
    markInAction,
    markOutAction,
    startPlaying,
}