import React from "react";
const ProfileDropdown = () => {
  return (
    <div className="col d-flex mt-2 justify-content-between">
      <div className="navbar-arrow d-flex ml-5">
        <div className="PreviousArrow">
          {/* <img src="./images/Previous-Arrow--.png" alt="Profileimg"
         className="img-fluid" width="30px;" height="30px;" 
         style="border-radius: 50%"/> */}
          <p>right</p>
        </div>
        <div className="nextArrow mx-2">
          {/* <img src="./images/next-arrow-2938996-2429434.png" alt="Profileimg"
         class="img-fluid ml-3" width="30px;" height="30px;" 
         style="border-radius: 50%"/> */}
          <p>left</p>
        </div>
      </div>

      <div className="mr-4">
        <ul className="navbar-nav">
          <button className="ProfileBtn btn bg-dark">
            <li className="nav-item dropdown d-flex mb-2">
              <div className="d-flex">
                <img
                  src="./images/Sherlock_Holmes_profilepic.jpeg"
                  alt="Profileimg"
                  className="mt-1"
                  width="30px"
                  height="30px"
                  //   style={{border-radius: 50%}}
                />
                <a
                  className="nav-link dropdown-toggle mx-2 text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Diego ziba
                </a>
                <ul
                  className="dropdown-menu mx-2 text-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="login.html">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="login.html">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
