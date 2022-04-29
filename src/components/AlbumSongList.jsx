import React from "react";
const AlbumSongList = () => {
  return (
    <div className="row playlist mx-4">
      <table className="tr-popular mx-4" id="album-artist-songs">
        <thead>
          <tr className="">
            <th>#</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Rank</th>
          </tr>
        </thead>

        <tbody>
          {/* item list */}
          <tr className="tr-popular mx-4">
            <th>
              <span className="track-number album-track-number">1</span>
            </th>
            <td>
              <span className="oi oi-audio-spectrum d-none"></span>
              <img
                className="mx-3"
                src="https://e-cdns-images.dzcdn.net/images/cover/156183a2535692255bc7b1e015b5fd3f/56x56-000000-80-0-0.jpg"
              />
              <span className="mx-4">undefineD</span>
            </td>
            <td className=" ">100000</td>
            <td className="muted-text">171</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AlbumSongList;
