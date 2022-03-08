import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <div className="row">
      <div className="site-footer">
        <div className="col-md-12">
          <div className="footer-innerContent">
            Content and photos ©{" "}
            <Link to="/" className="footer-link">
              Stefi Rosca
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
