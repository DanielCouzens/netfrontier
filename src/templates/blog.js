import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Seo from '../components/Seo'

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      author
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      thumbnail {
        fluid(maxWidth: 300) {
          ...GatsbyContentfulFluid
          src
        }
      }
      description
    }
  }
`

const Blog = props => {
  const image = props.data.contentfulBlog.thumbnail.src
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Seo
        title={props.data.contentfulBlog.title}
        description={props.data.contentfulBlog.description}
        image={image}
      />
      <div className="blog-page">
        <div className="blog-wrap">
          <h1>{props.data.contentfulBlog.title}</h1>
          <p className="">{props.data.contentfulBlog.publishedDate}</p>
          {documentToReactComponents(
            props.data.contentfulBlog.body.json,
            options
          )}
          <p>Article by {props.data.contentfulBlog.author}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Blog