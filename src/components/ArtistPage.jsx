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
import JumbotronArtist from "./JumbotronArtist";
import ListOptions from "./ListOptions";
import SongList from "./SongList";

const Index = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <ProfileDropdown />
          <JumbotronArtist />
          <ListOptions />
          <SongList />
          <SongList />
          <SongList />
          <SongList />
          <Player />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Index;
