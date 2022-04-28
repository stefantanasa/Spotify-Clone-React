import React from "react";
const JumbotronAlbum = () => {
  return (
    <div className="albumbody d-flex ml-4">
      <div className=" mb-4">
        <img
          id="album-image-cover"
          src="https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg"
          className="img-fluid"
          width="200px"
          height="200px"
        />
      </div>

      <div className="mt-5 mx-2">
        <p>
          <small>
            <b>Album</b>
          </small>
        </p>
        <h2 className="mt-0" id="album-artist-name">
          The Eminem Show
        </h2>
        <div className="d-flex">
          <img
            className="mx-1"
            src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            height="30px"
            width="30px"
            style={{ borderRadius: "50%" }}
          />
          <div>
            <span>
              <small>
                <b>Street King . 2020</b>
              </small>
            </span>{" "}
            <span>
              <small>
                <b> . 28 Songs . 1Hour 29 min</b>
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronAlbum;
