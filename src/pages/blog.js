import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Banner from '../components/BottomBanner'

const blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            thumbnail {
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo
        title="Our Blog"
        description="Net Frontier Blog articles about all things website Design, website development and online marketing. Learn more here ..."
      />
      <div className="section-blog">
        <div className="blog-hero">
          <h1>Welcome To Our Blog</h1>
        </div>
        <ol>
          {data.allContentfulBlog.edges.map(edge => {
            return (
              <li>
                <Link className="link" to={`/blog/${edge.node.slug}`}>
                  <Img fluid={edge.node.thumbnail.fluid} />
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
      <Banner />
    </Layout>
  )
}

export default blog
