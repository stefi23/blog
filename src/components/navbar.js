import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

const MyNavbar = () => (
  <header>
    <div className="row">
      <div className="col-md-12 mt-3">
        <Navbar collapseOnSelect expand="lg" bg="light" className="rounded">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/blog">Home</Nav.Link>
              <Nav.Link href="/blog/about">About</Nav.Link>
              <Nav.Link href="/blog/tags">Tags</Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link href="https://stefi.codes/">Portfolio</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
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

export default MyNavbar
