import React from "react";

const SongList = () => {
  return (
    <div className="row playlist mx-4">
      <div className="col-2">
        <span className="track-number album-track-number">1</span>
        <img
          className="mx-3"
          src="https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg"
        />
      </div>
      <div className="col">
        <span className="mx-4">Without Me</span>
      </div>
      <div className="col">
        <span className="mx-4">226</span>
      </div>
    </div>
  );
};

export default SongList;
