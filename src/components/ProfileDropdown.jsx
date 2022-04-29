import React from "react";
const ProfileDropdown = () => {
  return (
    <div className="col d-flex mt-2 justify-content-between">
      <div className="btn-group ml-5">
        <button
          className="btn bg-black btn-sm dropdown-toggle rounded-pill border-0"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          Diego Ziba Bano..
        </button>
        <div className="dropdown-menu">
          <ul>
            <li>Log out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
