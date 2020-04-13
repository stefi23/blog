/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import MyNavbar from "./navbar"
import Footer from "./footer"
import Sidebar from "./sidebar"

import "bootstrap/dist/css/bootstrap.min.css"

import TagsPage from "../pages/tags"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <MyNavbar />

      <div className="row mt-2">
        <div className="col-md-8 ">
          {/* <div className="content-box-main d-flex flex-column container-fluid"> */}
          <main>{children}</main>
          {/* </div> */}
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
      {/* <main>{children}</main> */}
      <Footer />
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
