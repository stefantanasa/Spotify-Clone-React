import { Card, Container, Row, Col } from "react-bootstrap";
import Index from "./components/Index";
import AlbumCard from "./components/AlbumCard";
import Sidebar from "./components/Sidebar";
import SongCard from "./components/SongCard";
import ProfileDropdown from "./components/ProfileDropdown";
import SongList from "./components/SongList";
import JumbotronAlbum from "./components/JumbotronAlbum";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col>
            <ProfileDropdown />
            <Index />
            <AlbumCard />
            <SongCard />
            <SongList />
            <JumbotronAlbum />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
