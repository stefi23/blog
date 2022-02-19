import React from "react"
import { Link } from "gatsby"

const MyNavbar = () => (
  <nav>
    <div className="row">
      <div className="col-md-12 mt-3 menu">
        <div className="navBar rounded">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/tags" className="navLink">
            Tags
          </Link>
          <Link to="/about" className="navLink">
            About
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default MyNavbar
