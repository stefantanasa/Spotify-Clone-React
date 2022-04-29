import React from "react";
import SongList from "./SongList";

const UnderJumboPart = () => {
  return (
    <div className="container table-container-play">
      <div className="d-flex py-4 align-items-center">
        <div>
          <div className="pause-btn d-flex justify-content-center align-items-center">
            <span className="oi oi-media-pause pause-icon"></span>
            <span className="oi oi-media-play  pause-icon d-none"></span>
          </div>
        </div>
        <div className="follow-btn mx-4 px-3">Follow</div>
        <div className="dots px-3 mb-2">···</div>
      </div>
      <div className="row">
        <div className="col">
          <h3> Popular</h3>
          <table className="table">
            <tbody id="artist-songs"></tbody>
          </table>
          <a className="text-muted more-nav">SEE ALL </a>
        </div>
        <div className="col-4">
          <h3> Artist pick </h3>
          <div className="d-flex">
            <img src="images/img10.jpg" alt="" className="img-artist-pick" />
            <div className="px-3">
              <img
                src="https://images.unsplash.com/photo-1648737966832-a4a65df3eedc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                alt=""
                className="img-artist-small"
              />
              <span className="text-muted"> Posted By Queen</span>
              <div className="mt-2 bold-text"> Queen Best Of</div>
              <div className="text-muted"> Playlist</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="popular-title">Popular releases</h3>
      </div>
    </div>
  );
};

export default UnderJumboPart;
