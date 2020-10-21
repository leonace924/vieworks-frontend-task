import styled from "styled-components";

const VideoPlayerContainer = styled.div`
  .player-wrapper {
    width: 480px;
    height: 270px;

    @media only screen and (min-width: 1024px) {
      width: 640px;
      height: 400px;
    }

    .react-player {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .control-event {
    padding-top: 40px;
    color: #fff;
  }
`;

export default VideoPlayerContainer;
