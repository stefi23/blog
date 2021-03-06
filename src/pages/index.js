import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "../components/navigation"
import { Helmet } from "react-helmet"

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Home" />

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="post-inner-content">
          <div className="article-card row">
            <div className="col" key={node.id}>
              <Link
                to={node.fields.slug}
                className="hover-bright"
                // style={{ textDecoration: "none" }}
              >
                {" "}
                <h1>{node.frontmatter.title}</h1>
              </Link>
              <span
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#8f3774",
                  fontSize: "12px",
                }}
              >
                {node.frontmatter.date}
              </span>
              <p>{node.excerpt}</p>
              <p>
                Reading time: {node.timeToRead}{" "}
                {node.timeToRead == 1 ? "minute" : "minutes"}
              </p>
              <div className="col">
                <Link to={node.fields.slug} className="btn-bordo rounded">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Navigation
        currentPage={pageContext.BlogCurrentPage}
        totalPages={pageContext.BlogNumPages}
      />
    </Layout>
  )
}

export const query = graphql`
  query($BlogSkip: Int, $BlogLimit: Int) {
    allMarkdownRemark(
      filter: {}
      sort: { order: DESC, fields: frontmatter___date }
      skip: $BlogSkip
      limit: $BlogLimit
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
