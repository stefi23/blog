import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-innerContent">
      <div className="article-card row">
        <div className="col p-3">
          <h1 className='about-innerContent-title'>
            Hello, I'm Stefi!
          </h1>
          <p>
            I am an outgoing and creative person, a sports enthusiast and a
            world traveler, who believes everything is possible if you put
            passion and hard work into it.
          </p>
          <p>More to come..</p>

          <Link to="/">
            <a className="btn-bordo rounded" href="">
              Go Back
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
