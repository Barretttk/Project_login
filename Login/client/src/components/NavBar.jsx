import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Navigate, Route, Router, Link } from 'react-router-dom';

const NavBar = () => {




  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Anime World</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to={"/"} class="nav-link active">
                  Home
                  <span class="visually-hidden">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/anime"} class="nav-link">
                  Anime
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/manga"} class="nav-link">
                  Manga
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/about"} class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu">
                  <Link to={"/Register"} class="dropdown-item">
                    Register
                  </Link>
                  <Link to={"/Login"} class="dropdown-item">
                    Login
                  </Link>
                  <a class="dropdown-item" href="#">
                    under construction
                  </a>
                  <div class="dropdown-divider"></div>
                  <Link to={"/Profile"} class="dropdown-item" >
                    Profile
                  </Link>
                </div>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                {/* switch when logged in and out */}
                Login / Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* ====================================================================*/}

      <script></script>
    </>
  );
}

export default NavBar;