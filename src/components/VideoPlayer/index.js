import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Row, Col } from "react-bootstrap";
import Duration from "../Duration";
import VideoPlayerContainer from "./index.style";

const VideoPlayer = ({ url }) => {
  const [videoControls, setVideoControls] = useState({});

  const handlePlay = () => {
    setVideoControls({
      ...videoControls,
      playing: true,
      ended: false,
    });
  };

  const handlePause = () => {
    setVideoControls({
      ...videoControls,
      playing: false,
    });
  };

  const handleProgress = ({ loaded, played, loadedSeconds, playedSeconds }) => {
    setVideoControls({
      ...videoControls,
      loaded: loaded,
      played: played * 100,
      loadedSeconds: loadedSeconds,
      playedSeconds: playedSeconds,
    });
  };

  const handleEnded = () => {
    setVideoControls({
      ...videoControls,
      playing: false,
      ended: true,
    });
  };

  const handleDuration = (duration) => {
    setVideoControls({
      ...videoControls,
      duration: duration,
    });
  };

  return (
    <VideoPlayerContainer>
      <Row className="justify-content-center">
        <Col md="12">
          <Row className="justify-content-center">
            <div className="player-wrapper">
              <ReactPlayer
                url={url}
                onStart={() => console.log("onStart")}
                controls={true}
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
                onProgress={handleProgress}
                onDuration={handleDuration}
                className="react-player"
              />
            </div>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center control-event">
        <Col md="12">
          <h3>Video Events</h3>
        </Col>
        <Col md="6">
          Duration:{" "}
          <Duration
            seconds={videoControls.duration ? videoControls.duration : 0}
          />
        </Col>
        <Col md="6">
          Loaded:{" "}
          <Duration
            seconds={
              videoControls.loadedSeconds ? videoControls.loadedSeconds : 0
            }
          />
        </Col>
        <Col md="12">
          Status:{" "}
          {videoControls.playing
            ? "Video is Playing"
            : videoControls.ended
            ? "Video is Ended"
            : videoControls.played > 0
            ? "Video is Paused"
            : "Video is not Started yet"}
        </Col>
        <Col md="12">
          Elapsed: {videoControls.played ? videoControls.played.toFixed(2) : 0}%
        </Col>
      </Row>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
