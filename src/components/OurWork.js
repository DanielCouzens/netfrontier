import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const OurWork = () => {
  const image = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "thebandacedemy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      theband: file(relativePath: { eq: "thebandacademy.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laptop: file(relativePath: { eq: "laptopDisplay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screens: file(relativePath: { eq: "screensDisplay copy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      richard: file(relativePath: { eq: "richardweale.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beech: file(relativePath: { eq: "beechandgreenelogo copy.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dorlands: file(relativePath: { eq: "dorlands_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "mobileDisplay copy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="our-work-wrap">
      <h2>Some Of Our Work</h2>
      <div className="our-work-row">
        <a
          rel="noopener"
          className="our-work-visit"
          href="https://www.dorlands.co.uk/"
          target="_blank"
        >
          <div className="work-cell">
            <Img fluid={image.screens.childImageSharp.fluid} />

            <div className="overlay">
              <div className="button-wrap-work">
                <Img
                  className="logo"
                  fluid={image.dorlands.childImageSharp.fluid}
                />
                <h2>Dorlands</h2>
              </div>
            </div>
          </div>
        </a>
        <a
          rel="noopener"
          class="our-work-visit"
          href="https://www.thebandacademy.co.uk/"
          target="_blank"
        >
          <div className="work-cell">
            <Img fluid={image.desktop.childImageSharp.fluid} />

            <div className="overlay">
              <div className="button-wrap-work">
                <Img
                  className="logo"
                  fluid={image.theband.childImageSharp.fluid}
                />
                <h2>The Band Academy</h2>
              </div>
            </div>
          </div>
        </a>
        <a
          rel="noopener"
          class="our-work-visit"
          href="https://www.richardweale.com/"
          target="_blank"
        >
          <div className="work-cell">
            <Img fluid={image.laptop.childImageSharp.fluid} />

            <div className="overlay">
              <div className="button-wrap-work">
                <Img
                  className="logo"
                  fluid={image.richard.childImageSharp.fluid}
                />
                <h2>Richard Weale</h2>
              </div>
            </div>
          </div>
        </a>
        <a
          rel="noopener"
          class="our-work-visit"
          href="https://www.beechandgreene.co.uk/"
          target="_blank"
        >
          <div className="work-cell">
            <Img fluid={image.mobile.childImageSharp.fluid} />

            <div className="overlay">
              <div className="button-wrap-work">
                <Img
                  className="logo"
                  fluid={image.beech.childImageSharp.fluid}
                />
                <h2>Beech & Greene</h2>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default OurWork
