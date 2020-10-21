import React from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <h2>Video Control</h2>
        </Row>

        <Row className="justify-content-center">
          <Col md="8">
            <VideoPlayer url="https://www.youtube.com/watch?v=70wvnG8Oo1E" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
