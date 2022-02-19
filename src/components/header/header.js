import React from "react"
import { Link } from "gatsby"

import Banner from "./banner"

const Header = () => (
  <header>
    <div className="row">
      <div className="col-md-12 banner">
        <div className="header">
          <Link to="/">
            <Banner />
          </Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header
