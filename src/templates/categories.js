import React from "react"
import PropTypes from "prop-types"

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
        {articles.map(article => (
          <div className="post-innerContent">
            <div className="article-card row">
              <div className="col" key={article.node.id}>
                <Link to={article.node.fields.slug}>
                  <h1 className="post-innerContent-title">{article.node.frontmatter.title}</h1>
                </Link>
                <span className="post-innerContent-date">
                  {article.node.frontmatter.date}
                </span>
                <p className="post-innerContent-content">{article.node.excerpt}</p>
                <p className="post-innerContent-readMore">
                  {`Reading time: ${article.node.timeToRead}
                  ${article.node.timeToRead == 1 ? "minute" : "minutes"}`}
                </p>
                <div className="col">
                  <Link
                    to={article.node.fields.slug}
                    className="primaryButton primaryButton-right"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

    </Layout>
  )
}

export default Categories
