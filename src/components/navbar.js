import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"

const MyNavbar = () => (
  <header>
    <div className="row">
      <div className="col-md-12 mt-3">
        <Navbar collapseOnSelect expand="lg" bg="light" className="rounded">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className='navLink'>Home</Link>
              <Link to="/about" className='navLink'>About</Link>
              <Link to="/tags" className='navLink'>Tags</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  </header>
)

export default MyNavbar
