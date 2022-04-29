import React from "react";

const AlbumCard = () => {
  return (
    <div className="">
      <div className="Albumcard card m-2" style={{ maxWidth: "300px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1633366120238-a77b951a2368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              className="img-fluid rounded-start"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                Burning Jazz-rock
                <br />
                Fusion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
