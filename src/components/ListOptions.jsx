import React from "react";

const ListOptions = () => {
  return (
    <div className="container-fluid table-container-play">
      <div className="d-flex py-4 align-items-center">
        <div>
          <div className="pause-btn d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-stop-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z" />
            </svg>
            <i class="bi bi-stop-circle"></i>
          </div>
        </div>
        <div className="follow-btn mx-4 px-3">Follow</div>
        <div className="dots px-3 mb-2">···</div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-start">
          <div>
            <h3> Popular</h3>
            <a className="text-muted more-nav">SEE ALL </a>
          </div>
          <table className="table">
            <tbody id="artist-songs"></tbody>
          </table>
        </div>
        <div className="col-4 ">
          <div className="">
            <h3> Artist pick </h3>
            <img
              src="https://images.unsplash.com/photo-1651143891190-60840072ed69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="img-artist-pick"
            />
            <div className="px-3">
              <img src="images/img11.jpg" alt="" className="img-artist-small" />
              <span className="text-muted"> Posted By Queen</span>
              <div className="mt-2 bold-text"> Queen Best Of</div>
              <div className="text-muted"> Playlist</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <h3 class="popular-title">Popular releases</h3>
      </div>
    </div>
  );
};

export default ListOptions;
