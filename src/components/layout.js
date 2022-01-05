/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import MyNavbar from "./navbar"
import Footer from "./footer"
import Sidebar from "./sidebar/sidebar"

import "bootstrap/dist/css/bootstrap.min.css"


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
        maxWidth: `1140px`,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <MyNavbar />
      <div className="row mt-2">
        <div className="col-md-8">
          <main>{children}</main>
        </div>
        <div className="col-md-4">
          <Sidebar />
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
