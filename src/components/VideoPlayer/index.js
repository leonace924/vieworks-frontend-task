import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Row, Col } from "react-bootstrap";
import Duration from "../Duration";
import VideoPlayerContainer from "./index.style";

const VideoPlayer = ({ url }) => {
  const [duration, SetDuration] = useState(0);
  const [videoControls, setVideoControls] = useState({});

  const handlePlay = () => {
    setVideoControls({
      ...videoControls,
      playing: true,
    });
  };

  const handlePause = () => {
    setVideoControls({
      ...videoControls,
      playing: false,
    });
  };

  const handleProgress = ({ loaded, played }) => {
    setVideoControls({
      ...videoControls,
      loaded: loaded,
      played: played,
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
    SetDuration(duration);
  };

  return (
    <VideoPlayerContainer>
      <Row className="justify-content-center">
        <Col md="12">
          <Row className="justify-content-center">
            <ReactPlayer
              url={url}
              onStart={() => console.log("onStart")}
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handleEnded}
              onProgress={handleProgress}
              onDuration={handleDuration}
            />
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center control-event">
        <Col md="12">
          <h3>Video Events</h3>
        </Col>
        <Col md="12">
          Duration: <Duration seconds={duration} />
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
          Elapsed:{" "}
          {videoControls.played ? videoControls.played.toFixed(3) * 100 : 0} %
        </Col>
      </Row>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
