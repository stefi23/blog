import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <div className="post-inner-content">
      <div className="article-card row">
        <div className="col">
          <h1>Tags</h1>

          <p>Welcome to the tags page</p>
          <Link to="/">
            <a className="btn-bordo rounded" href="">
              {" "}
              Go Back{" "}
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
