import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Navigation from "../components/navigation"

const IndexPage = ({ data, pageContext }) => {
  const { BlogCurrentPage, BlogNumPages } = pageContext

  return (
    <Layout>
      <SEO title="Home" canonical="" />
      <h1 className="blogTitle-hidden">Stefi's Travel Blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div className="post-innerContent" key={node.id}>
            <div className="article-card row">
              <div className="col">
                <Link to={node.fields.slug}>
                  <h2 className="post-innerContent-title-main">
                    {node.frontmatter.title}
                  </h2>
                </Link>
                <span className="post-innerContent-info">
                  {`${node.frontmatter.date} • ${node.timeToRead} min read`} •{" "}
                  <Link
                    className="post-innerContent-info-link"
                    to={`/category/${node.frontmatter.categories.toLowerCase()}`}
                  >
                    category: {node.frontmatter.categories}
                  </Link>
                </span>
                <p className="post-innerContent-info-tags">
                  {node.frontmatter.tags.map(tag => (
                    <Link
                      to={`/tags/${tag.toLowerCase()}/`}
                      className="post-innerContent-info-highlight"
                      key={tag}
                    >
                      {tag}
                    </Link>
                  ))}
                </p>
                <p>{node.excerpt}</p>
                <div className="col">
                  <Link to={node.fields.slug}>
                    <button className="primaryButton primaryButton-right">
                      Continue Reading
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {BlogCurrentPage && BlogNumPages && (
        <Navigation currentPage={BlogCurrentPage} totalPages={BlogNumPages} />
      )}
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
            date(formatString: "MMMM DD, YYYY")
            tags
            categories
            featuredImage {
              publicURL
            }
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
