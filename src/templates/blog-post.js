import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

export default props => {
  console.log(props) //to correct to data
  if (!props) {
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

  const { data, pageContext } = props
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
          <div>
            <div
              className="row mt-2 nav-innerContent"
              style={{ borderRadius: "4px" }}
            >
              <div className="col-md-12 ">
                <div className="row">
                  <div className="col-6 p-2 d-flex align-items-center justify-content-start pl-3">
                    {previous && (
                      <Link
                        to={previous?.fields?.slug}
                        className={`p-1 navigationButton navigationButton-left`}
                      >
                        ← {previous?.frontmatter.title}
                      </Link>
                    )}
                  </div>
                  <div className="col-6 p-2 d-flex align-items-center justify-content-end pr-3">
                    {next && (
                      <Link
                        to={next?.fields?.slug}
                        className={`p-1 navigationButton navigationButton-right`}
                      >
                        {next?.frontmatter.title} →
                      </Link>
                    )}
                  </div>
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
