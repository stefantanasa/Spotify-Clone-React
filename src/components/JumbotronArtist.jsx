import React from "react";
const JumbotronArtist = () => {
  return (
    <div class="positon-relative jmb-position">
      <div class="verified-artist-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="lightgreen"
          class="bi bi-patch-check-fill"
          viewBox="0 0 16 16"
        >
          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
        </svg>
        <span class="verified-artist-text">Verified Artist</span>
      </div>
      <img
        class=""
        src="https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        style={{ objectFit: "cover", maxHeight: "400px" }}
      />
      <h1 class="jumbo-title" id="">
        Queen
      </h1>
      <p class="jumbo-paragraph">37,120,733 listeners</p>
    </div>
  );
};

export default JumbotronArtist;
