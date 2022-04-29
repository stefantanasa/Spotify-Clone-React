import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SongCard from "./SongCard";
const SongsSection = ({ name }) => {
  return (
    <React.Fragment style={{ maxHeight: "340px", overflow: "hidden" }}>
      <Row>
        <h1>{name}</h1>
      </Row>
      <Row>
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </Row>
    </React.Fragment>
  );
};

export default SongsSection;
