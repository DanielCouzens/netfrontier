import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const Title = ({ description, name, className }) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.image.childImageSharp.fluid
      return (
        <BackgroundImage className={className} fluid={image}>
          <div className="title-wrap">
            <div className="inner-title">
              <h1>{name}</h1>
              <div className="sub-title">
                <h2>{description}</h2>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(Title)`
  width: 100vw;
  ackground-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
`

export default StyledBackgroundSection
