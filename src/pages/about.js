import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="post-inner-content">
      <div className="article-card row">
        <div className="col p-3">
          <h1
            style={{
              color: "#581845",

              fontFamily: "Indie Flower, cursive",
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "35px",
            }}
          >
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
