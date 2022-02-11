import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import kebabCase from "lodash/kebabCase"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title, description, image },
    },
  },
}) => {
  return (
    <div>
      <Layout>
        <SEO title="Tags" canonical="/tags" />
        <h1
          style={{
            visibility: "hidden",
            fontSize: "0px",
            margin: "0px",
          }}
        >
          Stefi's Travel Blog
        </h1>
        <div className="tags-innerContent">
          <div className="article-card row">
            <div className="col">
              <h2 className="tags-innerContent-title">Tags</h2>
              <ul>
                {group.map(tag => {
                  const { fieldValue, totalCount } = tag
                  return (
                    <li className="tags-innerContent-item" key={fieldValue}>
                      <Link
                        to={`/tags/${kebabCase(fieldValue)}/`}
                        className="tags-innerContent-item-link"
                      >
                        {fieldValue} ({totalCount})
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <Link to="/">
                <button className="primaryButton" href="">
                  Go Back to Home page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

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
        image
        description
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
