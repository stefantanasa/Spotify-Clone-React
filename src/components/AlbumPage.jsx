import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ProfileDropdown from "./ProfileDropdown";
import Player from "./Player";
import { Col, Row } from "react-bootstrap";
import JumbotronArtist from "./JumbotronArtist";
import SongList from "./SongList";

const AlbumPage = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col>
          <ProfileDropdown />
          <JumbotronArtist />
          <SongList />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AlbumPage;
