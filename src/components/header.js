import React from "react"
import Banner from "../components/banner"

const Header = ({ siteTitle }) => (
  <header>
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-md-12">
        <div className="header">
          <Banner />

          {/* <img
            src="https://github.com/stefi23/MyPortfolio/blob/master/YouTube%20Cover%20Stefi.jpg?raw=true"
            alt="Banner image with my name: Stefi Rosca"
            className="rounded mb-0"
          /> */}
        </div>
      </div>
    </div>
  </header>
)

export default Header
