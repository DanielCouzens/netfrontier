import React, { Component } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import chev from '../images/icons/down-chevron.svg'
import { Link } from 'gatsby'
import Testimonials from '../components/Testimonials'
import testimonialpictwo from '../images/testimonials/richard.jpg'
import BottomBanner from '../components/BottomBanner'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'SEO stands for Search Engine Optimisation. SEO is the practice of increasing the chances that a site ranks highly in the search results of major search engines such as Google, Yahoo and Bing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a CMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'CMS stands for Content Management System. A CMS allows someone with no coding or programming skill to make changes to a website. The most popular CMS is WordPress.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I need to get a new website built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'What you need to create a website varies greatly, depending on what sort of website your business requires. We have a simple questionnaire that can help you begin thinking about what you need for your website. If you wish you can submit the form and we will then contact you to discuss your requirements further',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the process look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Please go to Our Process page for a detailed explanation of how we work and what you can expect.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will it take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The time it takes to build a website depends on the size and scope of the project. If all the content is available and the design is agreed, we can create a website in weeks. Once we have a clear idea of what you need, we will create a timeline to give you a clear picture of the website build phases and when you can expect your site to be live.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a hand coded website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "A hand-coded website is a website that has been custom built from scratch by an experienced and skilled web designer/developer.We do not build websites using pre-existing templates that often developers don't fully understand and therefore cannot safely manipulate.Essentially if you choose to work with us you will have a bespoke unique website built using the best practices and designed to ensure it not only looks great but gives you every chance of ranking well in search engines and delivering excellent user experiences.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a headless CMS',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A headless CMS is the practice of separating the front end of a website from the back end of the website.The front end of the website is what we see when we use a browser such as Safari or Chrome. It is what the customer or clients see when they visit your website. The backend of the website is where your content is stored. A CMS can be thought of as the back end. By separating the front end from the back end, numerous benefits are gained such as increased website speed, increased security and a reduced likely hood of breaking the website when someone using a CMS makes changes and updates. This in turn creates the added benefit of creating more confidence in a CMS user and potentially reducing the costs of fixing the website.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GDPR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'GDPR stands for General Data Protection Regulation. GDPR is the data protection law brought in by the EU, and as of 2018, all organisations have been required to be compliant. Go to gdpr.eu to find out more.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are black hats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Black hats are the more unscrupulous people using the web. A black hat could be a hacker or someone who is plagiarising or stealing content. A black hat could even be a competitor pretending to be a potential client in order to gain information about your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Again this depends on your specific requirement's however we have created a prices page so you are able to gauge what you should budget for various types of websites. Go to Prices Page.",
      },
    },
  ],
}

class Faq extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn1: true }
    this.state = { isToggleOn2: true }
    this.state = { isToggleOn3: true }
    this.state = { isToggleOn4: true }
    this.state = { isToggleOn5: true }
    this.state = { isToggleOn6: true }
    this.state = { isToggleOn7: true }
    this.state = { isToggleOn8: true }
    this.state = { isToggleOn9: true }
    this.state = { isToggleOn10: true }
    this.state = { isToggleOn11: true }
    this.state = { isToggleOn12: true }
    this.state = { isToggleOn13: true }
    this.state = { isToggleOn14: true }
    this.handleclick1 = this.handleclick1.bind(this)
    this.handleclick2 = this.handleclick2.bind(this)
    this.handleclick3 = this.handleclick3.bind(this)
    this.handleclick4 = this.handleclick4.bind(this)
    this.handleclick5 = this.handleclick5.bind(this)
    this.handleclick6 = this.handleclick6.bind(this)
    this.handleclick7 = this.handleclick7.bind(this)
    this.handleclick8 = this.handleclick8.bind(this)
    this.handleclick9 = this.handleclick9.bind(this)
    this.handleclick10 = this.handleclick10.bind(this)
    this.handleclick11 = this.handleclick11.bind(this)
    this.handleclick12 = this.handleclick12.bind(this)
    this.handleclick13 = this.handleclick13.bind(this)
    this.handleclick14 = this.handleclick14.bind(this)
  }

  handleclick1(e) {
    this.setState(state => ({
      isToggleOn1: !state.isToggleOn1,
    }))
  }
  handleclick2(e) {
    this.setState(state => ({
      isToggleOn2: !state.isToggleOn2,
    }))
  }
  handleclick3(e) {
    this.setState(state => ({
      isToggleOn3: !state.isToggleOn3,
    }))
  }
  handleclick4(e) {
    this.setState(state => ({
      isToggleOn4: !state.isToggleOn4,
    }))
  }
  handleclick5(e) {
    this.setState(state => ({
      isToggleOn5: !state.isToggleOn5,
    }))
  }
  handleclick6(e) {
    this.setState(state => ({
      isToggleOn6: !state.isToggleOn6,
    }))
  }
  handleclick7(e) {
    this.setState(state => ({
      isToggleOn7: !state.isToggleOn7,
    }))
  }
  handleclick8(e) {
    this.setState(state => ({
      isToggleOn8: !state.isToggleOn8,
    }))
  }
  handleclick9(e) {
    this.setState(state => ({
      isToggleOn9: !state.isToggleOn9,
    }))
  }
  handleclick10(e) {
    this.setState(state => ({
      isToggleOn10: !state.isToggleOn10,
    }))
  }

  handleclick11(e) {
    this.setState(state => ({
      isToggleOn11: !state.isToggleOn11,
    }))
  }
  handleclick12(e) {
    this.setState(state => ({
      isToggleOn12: !state.isToggleOn12,
    }))
  }

  handleclick13(e) {
    this.setState(state => ({
      isToggleOn13: !state.isToggleOn13,
    }))
  }

  handleclick14(e) {
    this.setState(state => ({
      isToggleOn14: !state.isToggleOn14,
    }))
  }

  render() {
    return (
      <Layout>
        <Seo
          title="Faq"
          schemaMarkup={schema}
          description="Have a look though our frequently asked questions about website design and development. Please feel to get in touch if there is something we have not answered."
        />
        <div className="psuedo"></div>

        <div className="faq-wrap">
          <div className="faq-title">
            <h1>Frequently Asked Questions</h1>
            <p>
              Have a look though our frequently asked questions about website
              design and development. Please feel to get in touch if there is
              something we have not answered.
            </p>
            <Link
              to="/contact"
              data-sal="slide-left"
              data-sal-delay="200"
              data-sal-easing="ease-in"
            >
              <div className="call-to-action-white two faq-button">
                <span>Get In Touch</span>
              </div>
            </Link>
          </div>

          <div className="faq-inner">
            <div className="faq-qa">
              <div onClick={this.handleclick1} className="faq-question">
                <h3>1 What is SEO?</h3>
                <img
                  className={
                    this.state.isToggleOn1 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn1 ? (
                  <div className="faq-inner-answer">
                    <p>
                      <span className="highlight">SEO </span>stands for Search
                      Engine Optimisation.{' '}
                      <span className="highlight">SEO </span>
                      is the practice of increasing the chances that a site
                      ranks highly in the search results of major search engines
                      such as Google, Yahoo and Bing.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa">
              <div onClick={this.handleclick2} className="faq-question">
                <h3>2 What is a CMS?</h3>
                <img
                  className={
                    this.state.isToggleOn2 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn2 ? (
                  <div className="faq-inner-answer">
                    <p>
                      <span className="highlight">CMS</span> stands for Content
                      Management System. A{' '}
                      <span className="highlight">CMS</span> allows someone with
                      no coding or programming skill to make changes to a
                      website. The most popular{' '}
                      <span className="highlight">CMS</span> is WordPress.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa">
              <div onClick={this.handleclick3} className="faq-question">
                <h3> 3 What do I need to get a new website built?</h3>
                <img
                  className={
                    this.state.isToggleOn3 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn3 ? (
                  <div className="faq-inner-answer">
                    <p>
                      What you need to create a website varies greatly,
                      depending on what sort of website your business requires.
                    </p>

                    <p>
                      We have a simple questionnaire that can help you begin
                      thinking about what you need for your website. If you wish
                      you can submit the form and we will then contact you to
                      discuss your requirements further.
                    </p>
                    <Link to="/questionnaire">Go to the questionnaire.</Link>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa">
              <div onClick={this.handleclick4} className="faq-question">
                <h3>4 What does the process look like?</h3>
                <img
                  className={
                    this.state.isToggleOn4 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn4 ? (
                  <div className="faq-inner-answer">
                    <p>
                      Please go to <Link to="/our-process">Our Process</Link>{' '}
                      page for a detailed explanation of how we work and what
                      you can expect.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa" id="headless-cms">
              <div onClick={this.handleclick5} className="faq-question">
                <h3>5 How long will it take to build a website?</h3>
                <img
                  className={
                    this.state.isToggleOn5 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn5 ? (
                  <div className="faq-inner-answer">
                    <p>
                      The time it takes to build a website depends on the size
                      and scope of the project. If all the content is available
                      and the design is agreed, we can create a website in
                      weeks.
                    </p>
                    <p>
                      Once we have a clear idea of what you need, we will create
                      a timeline to give you a clear picture of the website
                      build phases and when you can expect your site to be live.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa">
              <div onClick={this.handleclick6} className="faq-question">
                <h3>6 What is a hand coded website?</h3>
                <img
                  className={
                    this.state.isToggleOn6 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn6 ? (
                  <div className="faq-inner-answer">
                    <p>
                      A hand-coded website is a website that has been custom
                      built from scratch by an experienced and skilled web
                      designer/developer.
                    </p>
                    <p>
                      We do not build websites using pre-existing templates that
                      often developers don't fully understand and therefore
                      cannot safely manipulate.
                    </p>
                    <p>
                      Essentially if you choose to work with us you will have a
                      bespoke unique website built using the best practices and
                      designed to ensure it not only looks great but gives you
                      every chance of ranking well in search engines and
                      delivering excellent user experiences.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa">
              <div onClick={this.handleclick7} className="faq-question">
                <h3>7 What is a headless CMS</h3>
                <img
                  className={
                    this.state.isToggleOn7 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn7 ? (
                  <div className="faq-inner-answer">
                    <p>
                      A headless CMS is the practice of separating the front end
                      of a website from the back end of the website.
                    </p>
                    <p>
                      The front end of the website is what we see when we use a
                      browser such as Safari or Chrome. It is what the customer
                      or clients see when they visit your website.
                    </p>
                    <p>
                      The backend of the website is where your content is
                      stored. A CMS can be thought of as the back end.
                    </p>
                    <p>
                      By separating the front end from the back end, numerous
                      benefits are gained such as increased website speed,
                      increased security and a reduced likely hood of breaking
                      the website when someone using a CMS makes changes and
                      updates. This in turn creates the added benefit of
                      creating more confidence in a CMS user and potentially
                      reducing the costs of fixing the website.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa">
              <div onClick={this.handleclick8} className="faq-question">
                <h3>8 What is GDPR?</h3>
                <img
                  className={
                    this.state.isToggleOn8 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn8 ? (
                  <div className="faq-inner-answer">
                    <p>
                      {' '}
                      <span className="highlight">GDPR</span> stands for General
                      Data Protection Regulation.{' '}
                      <span className="highlight">GDPR</span> is the data
                      protection law brought in by the EU, and as of 2018, all
                      organisations have been required to be compliant.{' '}
                    </p>
                    <p>
                      <a href="https://gdpr.eu/what-is-gdpr/" target="_blank">
                        Go to gdpr.eu
                      </a>{' '}
                      to find out more.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa">
              <div onClick={this.handleclick9} className="faq-question">
                <h3>9 What are black hats?</h3>
                <img
                  className={
                    this.state.isToggleOn9 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn9 ? (
                  <div className="faq-inner-answer">
                    <p>
                      Black hats are the more unscrupulous people using the web.
                      A black hat could be a hacker or someone who is
                      plagiarising or stealing content.
                    </p>

                    <p>
                      A black hat could even be a competitor pretending to be a
                      potential client in order to gain information about your
                      business.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className="faq-qa">
              <div onClick={this.handleclick10} className="faq-question">
                <h3>10 How much does a website cost?</h3>
                <img
                  className={
                    this.state.isToggleOn10 ? 'chev-open' : 'chev-close'
                  }
                  src={chev}
                  width="20"
                  height="20"
                />
              </div>
              <div className="faq-answer">
                {this.state.isToggleOn10 ? (
                  <div className="faq-inner-answer">
                    <p>
                      Again this depends on your specific requirement's however
                      we have created a prices page so you are able to gauge
                      what you should budget for various types of websites.{' '}
                      <Link to="/prices">Go to Prices Page.</Link>
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </div>
          </div>
        </div>
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
}

export default Faq
