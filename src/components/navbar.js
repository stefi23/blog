import React from "react"
import "./layout.css"

const Navbar = () => (
  <header>
    <div class="row">
      <div class="col-md-12 mt-3">
        <nav class="navbar navbar-expand-lg navbar-light  bg-light rounded">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#projects-section">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills-section">
                  Tags
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

export default Navbar
