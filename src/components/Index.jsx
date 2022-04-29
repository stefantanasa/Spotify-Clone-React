import React from "react";
import { Card } from "react-bootstrap";
import Player from "./Player";
import ProfileDropdown from "./ProfileDropdown";
import Sidebar from "./Sidebar";
import SongCard from "./SongCard";
import AlbumCard from "./AlbumCard";
import { Row, Container, Col } from "react-bootstrap";
import SongsSection from "./SongsSection";
import IndexJumbo from "./IndexJumbo";

const Index = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <ProfileDropdown />
          <IndexJumbo name="Good Morning" />
          <SongsSection name={"Recently Played"} />
          <SongsSection name={"Recently Played"} />
          <Player />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Index;
