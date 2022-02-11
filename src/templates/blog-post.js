import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavLink from "../components/navLink"
// import "../components/layout.css"

const BlogPost = props => {
  const { data, pageContext } = props
  if (!data) {
    return (
      <Layout>
        <div className="post-innerContent">
          <div className="article-card row">
            <div>
              <h1 className="post-innerContent-title">
                Oh, no! Something went wrong!
              </h1>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  const { next, previous } = pageContext

  const { markdownRemark } = data

  const { timeToRead, frontmatter, html, excerpt, fields } = markdownRemark

  const { slug } = fields

  const {
    title,
    date,
    tags,
    categories,
    featuredImage,
    description,
  } = frontmatter

  const category = categories
  const postContent = html

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt}
        image={featuredImage.childImageSharp.sizes.src}
        canonical={slug}
      />
      <div className="article-card">
        <div className="col">
          <h1 className="post-innerContent-title">{title}</h1>
          <span className="post-innerContent-info">
            {`${date} •
                  ${timeToRead} min read`}{" "}
            •{" "}
            <Link
              className="post-innerContent-info-link"
              to={`/category/${category.toLowerCase()}`}
            >
              category: {category}
            </Link>
          </span>
          <p>
            {tags.map(tag => (
              <Link
                to={`/tags/${tag.toLowerCase()}/`}
                className="post-innerContent-info-highlight"
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </p>

          <div dangerouslySetInnerHTML={{ __html: postContent }} />

          <div className="row mt-2">
            <div className="col-md-12 ">
              <div className="row p-3">
                <div className="col-12 p-0 pr-2 mb-2 d-flex align-items-center justify-content-start">
                  <h3 className="post-footer-title">More articles:</h3>
                </div>
                <div className="col-6 p-0 pr-2 d-flex align-items-center justify-content-start">
                  {previous && (
                    <NavLink
                      to={previous?.fields?.slug}
                      text={`←  ${previous?.frontmatter.title}`}
                      direction="left"
                    />
                  )}
                </div>
                <div className="col-6 p-0 pl-2 d-flex align-items-center justify-content-end">
                  {next && (
                    <NavLink
                      to={next?.fields?.slug}
                      text={`${next?.frontmatter.title} →`}
                      direction="right"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        tags
        categories
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 600) {
              src
            }
          }
        }
      }
      timeToRead
    }
  }
`

export default BlogPost
