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
            snippet
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

        <div className="get-ahead-wrap">
          <div className="get-ahead">
            <h2>Get Ahead of The Curve</h2>
            <p>
              Our blog is a place to find tips, tricks and help for all things
              website related. We want you to be successful in your online
              endeavors, and this is the starting place to make sure you are up
              to speed with everything you should expect to achieve with your
              new website.
            </p>
          </div>
        </div>

        <ol>
          {data.allContentfulBlog.edges.map(edge => {
            return (
              <li>
                <Link className="link" to={`/blog/${edge.node.slug}`}>
                  <Img fluid={edge.node.thumbnail.fluid} />
                  <div className="title-wrap-blog-posts">
                    <h2>{edge.node.title}</h2>
                  </div>
                  <p>{edge.node.publishedDate}</p>
                  <p className="snippet">
                    {edge.node.snippet}
                    {'..'}
                  </p>
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
