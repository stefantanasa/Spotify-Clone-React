import React from "react";

const CarouselJumbo = () => {
  return (
    <div className="carousel-inner  ">
      <div className="carousel-item active" data-bs-interval="10000">
        <div className=" mt-4 ml-5 justify-content-between ">
          <div className=" d-flex ml-4">
            <div className=" mb-4">
              <img
                src="https://images.unsplash.com/photo-1651088377436-255d20413a6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
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
                David Bowie(The Orignal SoundTrack)
              </h2>
              <div className="d-flex">
                <img
                  className="mx-1"
                  src="https://images.unsplash.com/photo-1651091484451-26bde82c9590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <div className="BohemianAlbum jumbotron mt-4 ml-5 justify-content-between ">
          <div className="albumbody d-flex ">
            <div className=" mb-4">
              <img
                src="https://images.unsplash.com/photo-1651156979722-5aca6096ec65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "
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
              <h2 className="mt-0">
                Jane’s Addiction (The Orignal SoundTrack)
              </h2>
              <div className="d-flex">
                <img
                  className="mx-1"
                  src="https://images.unsplash.com/photo-1651149655240-7e01a359801b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  height="30px"
                  width="30px"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <span>
                    <small>
                      <b>ArceTrack. 2019</b>
                    </small>
                  </span>{" "}
                  <span>
                    <small>
                      <b> . 16 Songs . 39 min</b>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <div className="BohemianAlbum jumbotron mt-4 ml-5 justify-content-between ">
          <div className="albumbody d-flex">
            <div className=" mb-4">
              <img
                src="https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
              <h2 className="mt-0">Mark Knopfler (The Orignal SoundTrack)</h2>
              <div className="d-flex">
                <img
                  className="mx-1"
                  src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  height="30px"
                  width="30px"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <span>
                    <small>
                      <b>Mark Playlist . 2018</b>
                    </small>
                  </span>{" "}
                  <span>
                    <small>
                      <b> . 22 Songs . 1Hour 39 min</b>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselJumbo;
