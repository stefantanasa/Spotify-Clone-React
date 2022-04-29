import { Card, Container, Row, Col } from "react-bootstrap";
import Index from "./components/Index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"/album-page/"} element={<AlbumPage />} />
            <Route path={"/artist-page/"} element={<ArtistPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
