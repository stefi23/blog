import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/whoAreYou.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" canonical="/about" />
      <h1
        style={{
          visibility: "hidden",
          fontSize: "0px",
          margin: "0px",
        }}
      >
        Stefi's Travel Blog
      </h1>
      <div className="about-innerContent">
        <div className="article-card row">
          <div className="col">
            <h2 className="about-innerContent-title">Hi there 👋</h2>
            <p className="post-innerContent-content">
              My name is Stefi. I am a speciality coffee lover, skier,
              occasional longboard skater and someone who might spend way too
              much time watching YouTube videos.
            </p>
            <p className="post-innerContent-content">
              In the near future I'd like to finish an olimpic triathlon and
              write more on this blog about traveling, my life in Barcelona,
              share recommendations (books, podcasts, YouTube videos, etc.), as
              well as insights from my journey in tech including articles code
              related. Beside this I hope to make more videos for my YouTube
              channel that I will share here too.
            </p>
            <p className="post-innerContent-content">
              I come from Romania, Brasov and currently, I live in Spain,
              Barcelona. I'm quite introverted and I used to be somewhat /
              extremely cautious and indecisive.
            </p>
            <p className="post-innerContent-content">
              Asking myself often "Who Are You?" and "Are You You?" helped me
              keep going. These questions come from a mini series I've seen on{" "}
              <a
                href="https://youtube.com/playlist?list=PLXYEaUHc07uZwOT63py0RTY8CKHOYnMaG"
                target="_blank"
              >
                YouTube.
              </a>
            </p>

            <Img
              className="rounded mb-0"
              alt="Image saying Who Are you? Are You You? You Are You"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />

            <p className="post-innerContent-content">
              In my spare time I also enjoy reading, spending time with friends,
              and when restrictions allow, independent and adventurous travel!
            </p>
            <p className="post-innerContent-content">Nice to meet you 😊</p>

            <Link to="/">
              <button className="primaryButton">Go Back to Home page</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
