import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />


 <div className="post-innerContent">
        <div className="article-card row">
          <div className="col">
            <h1 className='post-innerContent-title'>
             Not Found 😞
            </h1>
            <p className="post-innerContent-content">
              You just hit a route that doesn&#39;t exist... the sadness.
            </p>


          </div>
        </div>
      </div>

  </Layout>
)

export default NotFoundPage
