import React from 'react'
import Layout from '../components/Layout'
import '../styles/styles.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import testimonialpic from '../images/testimonials/helen.jpg'
import testimonialpictwo from '../images/testimonials/richard.jpg'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'
import Free from '../components/Free'
import BottomBanner from '../components/BottomBanner'
import Seo from '../components/Seo'
import Open from '../components/Open'

function Index() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Net Frontier',
    image: '../images/logo/android-chrome-512x512.png',
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
          fixed {
            src
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Net Frontier" schemaMarkup={schema} />

      <Hero />
      <Free />

      <section className="welcome-wrap">
        <div className="welcome-row">
          <div className="welcome-text">
            <h2>Welcome to Net Frontier</h2>
            <h3>The Bristol Web Design Company You Can Rely On</h3>
            <p>
              We are a web design company that creates fast, gorgeous, secure,
              user-friendly websites, designed to be future proof and optimised
              for the real world.
            </p>
            <p>
              Every website that we create is SEO friendly and uses the latest
              technologies to ensure built-in speed, security and
              responsiveness. You can update your website yourself using our
              chosen headless CMS platforms. We offer training to ensure you get
              the most out of your new website.
            </p>
            <p>
              At Net Frontier, we know that you might not have time to design a
              website when you are busy running your own business. That's why we
              offer a stress-free website design service that will take the load
              off your shoulders and get your business online for you.
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
