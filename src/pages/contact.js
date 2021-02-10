import React from 'react'
import Layout from '../components/Layout'
import Logo from '../images/logo/square-logo.svg'
import { Link } from 'gatsby'
import Forms from '../components/FormikForm'
import Title from '../components/TitleContact'
import fb from '../images/icons/001-facebook-grey.svg'
import li from '../images/icons/inkedin-grey.svg'
import ig from '../images/icons/002-instagram-grey.svg'
import Seo from '../components/Seo'
import Open from '../components/Open'

const Contact = ({ values }) => (
  <Layout>
    <Seo
      title="Contact Us"
      description="Contact Net Frontier today to find out how we can help you with website design and online marketing goals."
    />
    <Title name="Get in touch" description="We would love to help" />

    <div className="contact-logo-wrap">
      <img src={Logo} alt="net frontier logo" />
      <h2>NET FRONTIER</h2>
      <h3>web design made simple</h3>
    </div>

    <div className="contact-us-details">
      <div className="social-contact-wrap">
        <div className="dan-wrap"></div>
        <div className="contact-social-links">
          <a href="https://www.facebook.com/netfrontier.co.uk/" target="_blank">
            <img
              data-sal="zoom-in"
              data-sal-delay="100"
              data-sal-easing="ease-in"
              src={fb}
              alt="facebook icon link to Netfrontier web design graphic design Social account"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/43254516/admin/"
            target="_blank"
          >
            <img
              data-sal="zoom-in"
              data-sal-delay="300"
              data-sal-easing="ease-in"
              src={li}
              alt="linked in icon link to Netfrontier web design graphic design Social account"
            />
          </a>
          <a
            href="https://www.instagram.com/netfrontier.co.uk/"
            target="_blank"
          >
            <img
              data-sal="zoom-in"
              data-sal-delay="200"
              data-sal-easing="ease-in"
              src={ig}
              alt="facebook icon link to Netfrontier web design graphic design Social account"
            />
          </a>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-address">
          <h3>Net Frontier</h3>
          <p>110 Hickory Lane</p>
          <p>Almondsbury</p>
          <p>Bristol</p>
          <p>BS32 4FN</p>
        </div>
        <div className="contact-email">
          <a
            data-sal="slide-left"
            data-sal-delay="500"
            data-sal-easing="ease-in"
            href="mailto:info@netfrontier.co.uk"
          >
            info@netfrontier.co.uk
          </a>
        </div>
        <div className="contact-tel">
          <a href="tel: 07415 095025">
            <span> 07415 095025</span>
          </a>
          <p>01454 616080</p>
        </div>
      </div>
    </div>
    <div className="get-in-touch-wrap">
      <div className="get-in-touch">
        <p>
          Please contact us in the way that suits you best. If you would like to
          give us more information so we can get your website design project
          moving quicker then please{' '}
          <Link to="/questionnaire">
            {' '}
            click here to go to our questionnaire page
          </Link>
          . The questionnaire page takes you through various questions to help
          us understand more about what you require from your website.
        </p>

        <div className="twenty-four">
          <p>We aim to get back to all enquiries within 24 hours.</p>
          <p>Usually we are much quicker!</p>
        </div>
      </div>
    </div>

    <Forms />
    <Open />
  </Layout>
)

export default Contact
