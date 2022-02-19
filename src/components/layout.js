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
      <section className="row mt-2">
        <main className="col-md-8 mainContent">{children}</main>
        <aside className="col-md-4">
          <Sidebar />
        </aside>
      </section>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
