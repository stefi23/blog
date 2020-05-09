const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

const postPerPage = parseInt(process.env.POST_PER_PAGE) || 4

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    let match = slug.replace("/content", "")

    createNodeField({
      node,
      name: `slug`,
      value: match,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const categoriesTemplate = path.resolve("src/templates/categories.js")

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              categories
              title
              date
              featuredImage {
                publicURL
              }
            }
            excerpt
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //How many pages will exist
  const numPages = Math.ceil(result.data.postsRemark.totalCount / postPerPage)

  const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
    })
  })

  console.log("posts per page: ", postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? "/" : `/page/${i + 1}`,
      component: path.resolve("./src/pages/index.js"),
      context: {
        BlogLimit: postPerPage,
        BlogSkip: i * postPerPage,
        BlogNumPages: numPages,
        BlogCurrentPage: i + 1,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  //Make categories pages:

  const categories = result.data.categoriesGroup.group
  categories.forEach(category => {
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: categoriesTemplate,
      context: {
        category: category.fieldValue,
        articles: result.data.postsRemark.edges.filter(article => {
          return article.node.frontmatter.categories === category.fieldValue
        }),
      },
    })
  })

  // console.log(result.data.categoriesGroup.group)
  // console.log(JSON.stringify(result, undefined, 2))
}
