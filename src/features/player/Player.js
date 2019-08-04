import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import actions from "./store/actions";
import { Button } from "react-bootstrap";
import YouTube from "react-youtube";

export class Player extends Component {
  state = {
    player: null,
    duration: 0,
    segmentList: []
  };
  onReady = this.onReady.bind(this);
  onPlayVideo = this.onPlayVideo.bind(this);
  onPauseVideo = this.onPauseVideo.bind(this);

  onReady(event) {
    this.setState({
      player: event.target
    });
  }
  onPlayVideo() {
    const { startPlaying } = this.props.actions;
    const { selectedMovie, segmentStart } = this.props.movies;

    this.state.player.playVideo();
    startPlaying(selectedMovie);
  }
  seekSegment() {
    const { segmentStart } = this.props.movies;
    this.state.player.seekTo(segmentStart);
  }
  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  render() {
    const { selectedMovie, segmentStart, segmentEnd } = this.props.movies;
    const { markInAction, markOutAction, checkMarks } = this.props.actions;
    const opts = {
      playerVars: {
        autoplay: 1,
        loop: 1,
        start: Number(segmentStart, 10),
        end: Number(segmentEnd, 10),
        modestbranding: 1,
        controls: 1,
        rel: 0
      }
    };
    return (
      <div style={{ width: 660, height: "auto" }}>
        <YouTube
          videoId={selectedMovie}
          onReady={this.onReady}
          opts={opts}
          sandbox="allow-same-origin"
        />

        {/* <Button onClick={this.play.bind(this)}>Play</Button>
            <Button>Pause</Button> */}
        <Button onClick={this.onPlayVideo}>Play</Button>
        <Button onClick={this.onPauseVideo}>Pause</Button>
        <Button onClick={this.seekSegment.bind(this)}>Segment Start</Button>

        <Button
          onClick={() => {
            markInAction(this.state.player.getCurrentTime());
            checkMarks();
          }}
        >
          In-Mark
        </Button>
        <Button
          onClick={() => {
            markOutAction(this.state.player.getCurrentTime());
            checkMarks();
          }}
        >
          Out-Mark
        </Button>
        <Button onClick={() => {}}>full-play</Button>
      </div>
    );
  }
}

export default connect(
  state => ({
    movies: state.playerReducer
  }),
  dispatch => ({
    actions: {
      checkMarks: () => dispatch(actions.checkMarks()),
      markInAction: milliseconds =>
        dispatch(actions.markInAction(milliseconds)),
      markOutAction: milliseconds =>
        dispatch(actions.markOutAction(milliseconds)),
      startPlaying: () => dispatch(actions.startPlaying())
    }
  })
)(Player);
