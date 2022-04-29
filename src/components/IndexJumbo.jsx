import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import SongCard from "./SongCard";
const IndexJumbo = ({ name }) => {
  return (
    <React.Fragment style={{ maxHeight: "540px", overflow: "hidden" }}>
      <Row>
        <h1>{name}</h1>
      </Row>
      <Row>
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </Row>
    </React.Fragment>
  );
};

export default IndexJumbo;
