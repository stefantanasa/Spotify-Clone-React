import React from "react";
const JumbotronArtist = () => {
  return (
    <div class="jumbotron-fluid">
      <div class="positon-relative jmb-position">
        <div class="d-flex position-absolute mt-3">
          <div class="arrow-buttons mx-5">
            <button
              id="first-button"
              class="btn  rounded-circle ml-5"
              type="btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <button class="btn rounded-circle mx-2" type="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="verified-artist-container">
          <i class="jumbo-icon bi bi-patch-check-fill"></i>
          <span class="verified-artist-text">Verified Artist</span>
        </div>
        <img
          class="w-100 jumbo-img img-fluid"
          id="artist-image"
          src="./images/jumbotron1.jpg"
          alt=""
        />
        <h1 class="jumbo-title" id="artist-name">
          Queen
        </h1>
        <p class="jumbo-paragraph">37,120,733 listeners</p>
      </div>
    </div>
  );
};

export default JumbotronArtist;
