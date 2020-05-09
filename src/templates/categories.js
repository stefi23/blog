import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import { Link, graphql } from "gatsby"

const Categories = ({ pageContext, data }) => {
  const { articles, category } = pageContext

  console.log(articles)
  return (
    <div>
      {" "}
      <h1>Category: {category}</h1>
    </div>
  )
}

export default Categories
