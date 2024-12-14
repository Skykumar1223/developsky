import React, { useEffect, useState } from "react";
import Login from "./register";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Front = () => {
  const [local, setLocal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLocal(true);
    } else {
      setLocal(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };

  return (
    <div id="navbg">
      <div className="container ">
        <nav class="navbar navbar-expand-lg " id="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" id="icon" href="#">
              Keep Notes
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <Link to="/login" className="navlinkbtn">
                  <li class="nav-item">About </li>
                </Link>
                <Link to="/login" className="navlinkbtn">
                  <li class="nav-item">Notes</li>
                </Link>
                <Link to="/login" className="navlinkbtn">
                  <li class="nav-item">Account</li>
                </Link>

                {local ? (
                  <li className="nav-item">
                    <button
                      className=""
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <Link to="/login" className="navlinkbtn">
                    <li className="nav-item">Login</li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Front;
