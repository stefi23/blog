import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import "../components/layout.css"

export default ({ data }) => {
  if (!data) {
    return <h2>Sorry, couldn't find that!</h2>
  }
  const post = data.markdownRemark
  
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
        />
        <title>{`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
        />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={`http://www.stefi.codes${post.frontmatter.featuredImage.childImageSharp.sizes.src}`}
        />
        <meta
          name="twitter:image"
          content={`http://www.stefi.codes${post.frontmatter.featuredImage.childImageSharp.sizes.src}`}
        ></meta>
        <meta
          property="og:url"
          content={`http://www.stefi.codes/blog${post.fields.slug}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <link
          rel="canonical"
          href={`http://www.stefi.codes/blog${post.fields.slug}`}
        />
      </Helmet>
      {/* <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        featuredImage={post.frontmatter.featuredImage}
      /> */}
      <div className="post-innerContent">
        <div className="article-card row">
          <h1 className="post-innerContent-title">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div>
            <Link to="/" className="btn-bordo rounded">
              Go Back
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
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`
