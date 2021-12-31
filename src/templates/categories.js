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

      <div>
        {" "}
        <div className="row categories-innerContent" style={{ borderRadius: "4px" }}>
          {" "}
          <div className="col-md-12 navigation-card">
            <div className="row">
              <div
                className=" mb-0 fontSize15"
                style={{
                  color: "#581845",
                }}
              >
                <p
                  className="mb-0 fontSize15"
                  style={{
                    color: "#581845",
                    padding: "15px",
                  }}
                >
                  Articles from category{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {category}:
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {articles.map(article => (
          <div className='post-innerContent'>
            <div className="article-card row">
              <div className="col" key={article.node.id}>
                <Link to={article.node.fields.slug} className="hover-bright">
                  <h1 className='post-innerContent-title'>{article.node.frontmatter.title} </h1>
                </Link>
                <span
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    color: "#8f3774",
                    fontSize: "12px",
                  }}
                >
                  {article.node.frontmatter.date}
                </span>
                <p> {article.node.excerpt}</p>
                <p>
                  Reading time: {article.node.timeToRead}{" "}
                  {article.node.timeToRead == 1 ? "minute" : "minutes"}
                </p>
                <div className="col">
                  <Link
                    to={article.node.fields.slug}
                    className="btn-bordo rounded"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Categories
