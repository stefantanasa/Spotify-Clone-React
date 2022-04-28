import React from "react";

const SongList = () => {
  return (
    <div className="col mt-2">
      <div className="row playlist mx-4">
        <table className="col-12 album-table" id="album-artist-songs">
          <tbody></tbody>
          <tr className="tr-popular">
            <td>
              <span className="track-number album-track-number">1</span>
              <span className="oi oi-audio-spectrum d-none"></span>
              <img
                className="mx-3"
                src="https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg"
              />
              <span className="mx-4">Without Me</span>
            </td>

            <td className="mr-0 pr-0" id="song-rank">
              306198
            </td>
            <td className="muted-text ml-0 pl-0">226</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SongList;
