import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />

      {/* <img
          src="http://lorempixel.com/700/300/city/"
          style={{ marginBottom: "0px" }}
        /> */}

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="post-inner-content">
          <div className="article-card row">
            {/* <img
              src="http://lorempixel.com/700/300/city/"
              style={{ marginBottom: "30px" }}
              className="rounded"
            /> */}
            <div className="col" key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <span
                style={{
                  color: "red",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#8f3774",
                  fontSize: "12px",
                }}
              >
                {node.frontmatter.date}
              </span>
              <p>{node.excerpt}</p>
              <p>Reading time: {node.timeToRead}minutes</p>
              <div className="col">
                <Link to={node.fields.slug} className="btn-bordo rounded">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <span
            style={{
              color: "red",
              fontFamily: "Open Sans, sans-serif",
              color: "#8f3774",
              fontSize: "12px",
            }}
          >
            21 March 2019
          </span>
          <p className="summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque non hendrerit lacus, sit amet sodales metus. Donec sit
            amet ligula orci. Aliquam vel porta elit. Integer ut turpis pretium,
            efficitur leo lobortis, tempus ante. Etiam ornare nisl et velit
            placerat posuere. Aliquam elementum commodo tempor. Integer vehicula
            dictum laoreet.
          </p>
          <p>
            Etiam ac enim lacinia, placerat dolor eget, laoreet libero. Nulla
            porttitor, magna ut sodales semper, tortor risus pretium mi, quis
            euismod felis ligula ac mi. Nam imperdiet dolor non quam pretium
            posuere sit amet ac enim.{" "}
          </p>
          <a className="btn-bordo rounded" href="">
            {" "}
            Read More{" "}
          </a> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {}
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(pruneLength: 350)
          timeToRead
        }
      }
    }
  }
`

export default IndexPage
