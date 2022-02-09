import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

export default ({ data }) => {
  if (!data) {
    return (
    <Layout>
          <div className="post-innerContent">
        <div className="article-card row">
          <div>
            <h1 className="post-innerContent-title">Oh, no! Something went wrong!</h1>
          </div>
        </div>
      </div>
    </Layout> 
    )}

  const {markdownRemark} = data

  const { timeToRead, frontmatter ,html, excerpt, fields} = markdownRemark

  const { slug } = fields

  const { title, date, tags, categories, featuredImage, description } =  frontmatter

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
                  ${timeToRead} min read`} • <Link className="post-innerContent-info-link" to={`/category/${(category).toLowerCase()}`}>category: {category}</Link> 
              </span>
              <p>
              {tags.map(tag => 
              <Link to={`/tags/${(tag).toLowerCase()}/`} className='post-innerContent-info-highlight' key={tag}>{tag}</Link>
              )}
              </p>
          
            <div dangerouslySetInnerHTML={{ __html: postContent }} />
            
            <div>
              <Link to="/" >
                <button className="primaryButton">
                Go Back to Home page
                </button>
              </Link>
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