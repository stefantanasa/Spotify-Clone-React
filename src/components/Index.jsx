import React from "react";
import { Card } from "react-bootstrap";
import Player from "./Player";
import ProfileDropdown from "./ProfileDropdown";
import Sidebar from "./Sidebar";
import SongCard from "./SongCard";
import AlbumCard from "./AlbumCard";
import { Row, Container, Col } from "react-bootstrap";

const Index = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col>
          <ProfileDropdown />

          <AlbumCard />
          <SongCard />
          <Player />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Index;
