import React from 'react'
import Layout from '../components/Layout'
import '../styles/styles.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import testimonialpic from '../images/testimonials/helen.jpg'
import testimonialpictwo from '../images/testimonials/richard.jpg'
import HeroOpt from '../components/HeroOpt'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'
import Free from '../components/Free'
import BottomBanner from '../components/BottomBanner'
import Seo from '../components/Seo'
import Open from '../components/Open'

import Logo from '../images/logo/android-chrome-512x512.png'

function Index() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Net Frontier',
    image: { Logo },
    '@id': '',
    url: 'https://www.netfrontier.co.uk/',
    telephone: '01454 616080',
    description:
      'Do you need a new website? We design super fast, user friendly, technologically advanced websites, hand-coded to help your business thrive online',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '110 Hickory Lane, Almondsbury',
      addressLocality: 'Bristol',
      postalCode: 'BS32 4FN',
      addressCountry: 'GB',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  }

  const image = useStaticQuery(graphql`
    query {
      netfrontier: file(relativePath: { eq: "mobile-phone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Net Frontier" schemaMarkup={schema} />

      <HeroOpt />
      <Free />

      <section className="welcome-wrap">
        <div className="welcome-row">
          <div className="welcome-text">
            <h2>Welcome to Net Frontier</h2>
            <p>
              We create fast, gorgeous, secure, user-friendly websites, designed
              to be future proof and optimised for the real world.
            </p>
            <p>
              We achieve this by keeping our finger on the pulse, adopting new
              technologies that are proven in the field and usually totally out
              of reach for smaller companies.
            </p>
            <p>
              Work with us to create a website design that reflects your brand
              values, enhances your customer experiences and grows your
              business.
            </p>

            <div className="cta-wrap-home">
              <Cta name="Website Design" link="/services" />
              <Cta name="Prices" link="/prices" />
            </div>
          </div>
          <div className="welcome-pic">
            <Img
              className="mobile-phone-netfrontier"
              fluid={image.netfrontier.childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
      <Testimonials
        quotes="Net Frontier really do go above and beyond, this isn't just another web design agency, it's a company that genuinely cares."
        name="Helen"
        website="https://www.dorlands.co.uk/"
        photo={testimonialpic}
        company="Dorlands"
      />

      <Features />
      <Open />
      <Testimonials
        quotes="Check out my awesome author website care of Net Frontier. It's super cool, super sexy, and super fast. Thank you."
        name="Richard"
        website="https://www.richardweale.com/"
        photo={testimonialpictwo}
        company="Richard Weale"
      />

      <BottomBanner />
    </Layout>
  )
}

export default Index
