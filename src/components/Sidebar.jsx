import React from "react";

const Sidebar = () => {
  return (
    <div id="main-container">
      <div className="nav-main-box">
        <div className="logo-container">
          <img
            className="img-fluid my-4"
            src="/spotify-logo.png"
            alt="logo-container"
          />
        </div>
        <div className="main-links d-flex">
          <a className="" href="#">
            <i className="bi bi-house-fill text-muted"></i>Home
          </a>
          <a className="" href="searchHTML.html">
            <i className="bi bi-search text-muted"></i>Search
          </a>

          <a className="" href="login.html">
            <i className="bi bi-collection-fill text-muted"></i>Library
          </a>
        </div>
        <div className="second-links my-4">
          <a className="d-block mb-2" href="artist.html">
            <i className="bi bi-plus text-black bg-white"></i> Create Playlist
          </a>
          <a className="d-block" href="albumpage.html">
            <img
              className="img-fluid likedPick"
              src="/mp_assets/liked songs.jpg"
              alt=""
            />
            Liked Songs
          </a>
        </div>
        <div className="list-of-songs">
          <a href="">Funky Heavy Bluesy</a>
          <a href="">Your Top Songs 2020 </a>
          <a href="">In Love With You</a>
          <a href="">This Is Rod Stewart</a>
          <a href="">FRANCHISE ft. Young Thu</a>
          <a href="">Your Top Songs 2019</a>
          <a href="">Palleggio</a>
          <a href="#">This Is Joe Bonamassa</a>
          <a href="#">Jun19</a>
          <a href="#">Jack 30th Party 2</a>
          <a href="#">Jack 30th Party</a>
          <a href="#">This Is Opeth</a>
          <a href="#">Metal Ballads</a>
          <a href="#">New Playlist</a>
          <a href="#">Your Top Songs 2018</a>
          <a href="#">Jazz classics Blue Note Edition</a>
          <a className="install-app mt-3" href="#">
            <i className="bi bi-arrow-down-circle mr-1"></i> Install App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
