import React from "react"
import { Link } from "gatsby"

import Banner from "../components/banner"

const Header = () => (
  <header>
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-md-12">
        <div className="header">
        <Link to="">
          <Banner />
          </Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header
