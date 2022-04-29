import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ProfileDropdown from "./ProfileDropdown";
import Player from "./Player";
import { Col, Row } from "react-bootstrap";
import JumbotronArtist from "./JumbotronArtist";
import SongList from "./SongList";
import CarouselJumbo from "./CarouselJumbo";
import UnderJumboPart from "./UnderJumboPart";
import AlbumSongList from "./AlbumSongList";

const AlbumPage = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <ProfileDropdown />
          <CarouselJumbo />
          <UnderJumboPart />
          <AlbumSongList />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AlbumPage;
