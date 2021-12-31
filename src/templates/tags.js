import React from "react"
import PropTypes from "prop-types"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <Layout>
        <SEO title={tagHeader} />

        <div className="tags-innerContent">
          <div className="article-card row">
            <div className="col">
              <h1 className="mb-3 tags-innerContent-title">{tagHeader}</h1>
              <div className="p-3">
                <ul>
                  {edges.map(({ node }) => {
                    const {fields, frontmatter } = node
                    const {slug} = fields
                    const {title} = frontmatter
                    return (
                      <li className="tags-innerContent-item" key={slug}>
                        <Link className="tags-innerContent-item-link" to={slug}>{title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
                <Link to="/tags">
                  <button className="primaryButton" href="">
                    Go back to all tags
                  </button></Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
