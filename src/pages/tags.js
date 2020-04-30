import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title="Tags" />

    <Layout>
      <SEO title="Tags" />
      <div className="post-inner-content">
        <div className="article-card row">
          <div className="col">
            <h1>Tags</h1>

            {/* <p>Welcome to the tags page</p> */}
            <ul>
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link
                    to={`/tags/${kebabCase(tag.fieldValue)}/`}
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      color: "#581845",
                      fontSize: "14px",
                    }}
                  >
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
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
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
