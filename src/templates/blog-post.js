import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
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

  const { title, date, tags, categories, featuredImage } =  frontmatter

  const category = categories
  const postContent = html
  
  return (
    <Layout>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Do+Hyeon|Gaegu:400,700|Gamja+Flower|Nanum+Gothic: 400,700|Indie+Flower|Roboto|Open+Sans:300,400,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />        <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={`${title} | ${data.site.siteMetadata.title}`}
        />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={`http://www.stefi.xyz${featuredImage.childImageSharp.sizes.src}`}
        />
        <meta
          name="twitter:image"
          content={`http://www.stefi.xyz${featuredImage.childImageSharp.sizes.src}`}
        ></meta>
        <meta
          property="og:url"
          content={`http://www.stefi.xyz/blog${slug}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <link
          rel="canonical"
          href={`http://www.stefi.xyz/blog${slug}`}
        /> 
      </Helmet>
      {/* <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        featuredImage={post.frontmatter.featuredImage}
      /> */}
 
        <div className="article-card">
           <div className="col">

              <h1 className="post-innerContent-title">{title}</h1>
              <span className="post-innerContent-info">
                 {`${date} •
                  ${timeToRead} min read`} • <Link className="post-innerContent-info-link" to={`category/${(category).toLowerCase()}`}>category: {category}</Link> 
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