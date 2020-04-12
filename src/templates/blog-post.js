import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ data }) => {
  // const post = data.markdownRemark
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="post-inner-content">
        <div className="article-card row">
          {/* <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
          <div className="text-center">
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
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
