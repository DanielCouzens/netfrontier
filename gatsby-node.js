const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const pageTemplate = path.resolve('./src/templates/page.js')
  const res = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // allContentfulPage {
  //   edges {
  //     node {
  //       slug
  //     }
  //   }
  // }

  res.data.allContentfulBlog.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // res.data.allContentfulPage.edges.forEach(edge => {
  //   createPage({
  //     component: pageTemplate,
  //     path: edge.node.slug,
  //     context: {
  //       slug: edge.node.slug,
  //     },
  //   })
  // })
}
