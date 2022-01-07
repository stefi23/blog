import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link, graphql } from "gatsby"

const Categories = ({ pageContext, data }) => {
  const { articles, category } = pageContext

  return (
    <Layout>
      <SEO title={category} />
        <div className="row categories-innerContent">
          <div className="col-md-12 navigation-card">
            <div className="row">
              <div className="mb-0">
                <p className="mb-0 categories-innerContent-info">
                  {`Articles from category `} 
                  <span className='categories-innerContent-info-highlight'>
                    {category}:
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {articles.map(article => {

          const { node } = article
          const { id, fields, frontmatter, excerpt, timeToRead } = node
          const { slug } = fields
          const { title, date, tags } = frontmatter

          return (
            
          <div className="post-innerContent">
            <div className="article-card row">
              <div className="col" key={id}>
                <Link to={slug}>
                  <h1 className="post-innerContent-title-main">{title}</h1>
                </Link>
                 <span className="post-innerContent-info">
                 {`${date} •
                  ${timeToRead} min read`} • <Link className="post-innerContent-info-link" to={`category/${(category).toLowerCase()}`}>category: {category}</Link> 
                </span>
                <p>
                    {tags.map(tag => 
                      <Link to={`/tags/${(tag).toLowerCase()}/`} className='post-innerContent-info-highlight' key={tag}>{tag}</Link>
                      )
                    }
                </p>
                <p className="post-innerContent-content">{excerpt}</p>
                <div className="col">
                   <Link to={slug}>
                    <button className="primaryButton primaryButton-right">
                      Continue Reading
                    </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        )})}

    </Layout>
  )
}

export default Categories
