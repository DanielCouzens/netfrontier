// import React from 'react'
// import Layout from '../components/Layout'
// import Hero from '../components/HeroStandard'
// import { Link } from 'gatsby'
// import { graphql } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Seo from '../components/Seo'

// export const query = graphql`
//   query($slug: String!) {
//     contentfulPage(slug: { eq: $slug }) {
//       title
//       subHeading
//       contentOne {
//         json
//       }
//       image {
//         fluid(maxWidth: 300) {
//           ...GatsbyContentfulFluid
//         }
//       }
//       colour
//     }
//   }
// `

// const websiteDesign = props => {
//   const options = {
//     renderNode: {
//       'embedded-asset-block': node => {
//         const alt = node.data.target.fields.title['en-US']
//         const url = node.data.target.fields.file['en-US'].url
//         return <img className="image" alt={alt} src={url} />
//       },
//     },
//   }

//   const {
//     title,
//     image,
//     contentOne,
//     subHeading,
//     mainText,
//     colour,
//   } = props.data.contentfulPage

//   return (
//     <Layout>
//       <Hero title={title} tagline={subHeading} colour={colour} />
//       <div className="page-container">
//         <div className="page-wrap">
//           {documentToReactComponents(contentOne.json, options)}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default websiteDesign
