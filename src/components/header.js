import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-md-12">
        <div className="header">
          <img
            src="https://github.com/stefi23/MyPortfolio/blob/master/YouTube%20Cover%20Stefi.jpg?raw=true"
            alt="Banner image with my name: Stefi Rosca"
            className="rounded mb-0"
          />
          {/* <Banner /> */}
        </div>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
