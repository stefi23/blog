import React from "react"
import "./layout.css"
import { Link } from "gatsby"

const Navbar = () => (
  <header>
    <div className="row">
      <div className="col-md-12 mt-3">
        <nav className="navbar navbar-expand-lg navbar-light  bg-light rounded">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about/"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/tags/"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Tags
                </Link>
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
