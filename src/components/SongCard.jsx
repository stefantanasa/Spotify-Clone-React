import React from "react";

const SongCard = () => {
  return (
    <div className="row flex-nowrap row-overflow">
      <div className="card" style={{ maxWidth: "250px" }}>
        <div className="card-image-container">
          <div className="play-btn"></div>
          <div className="ratio ratio-1x1">
            <img
              src="https://images.unsplash.com/photo-1511743669436-94b53a839e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="card-img-top py-3 px-3 card-image-rounded"
              alt="..."
            />
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title">Burning Jazz-rock</h6>
          <p className="card-text truncate-2-lines">
            This is the most interesting Track eva!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
