import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Flacipy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-elem">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mock" href="#">
                  Mock Interviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link questions" href="#">
                  Interview Questions
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link practise" href="#">
                  Practise
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link resume-builder" href="#">
                  Resume Builder
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link jobs" href="#">
                  Jobs
                </a>
              </li>
              <button type="button" class="btn btn-primary signIn">Sign In</button>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
