import React, { Component } from 'react'
import fast from '../images/icons/001-start-up.svg'
import secure from '../images/icons/002-security.svg'
import responsive from '../images/icons/003-smartphone.svg'
import user from '../images/icons/004-add-friend.svg'
import access from '../images/icons/005-service-dog.svg'
import strategy from '../images/icons/006-knight.svg'
import analytics from '../images/icons/008-graphics.svg'
import support from '../images/icons/011-cms.svg'
import ecom from '../images/icons/010-add-to-cart-e-commerce-interface-symbol.svg'
import cms from '../images/icons/012-copyright-guidelines.svg'
import Banner from '../components/Banner'
import OurWork from '../components/OurWork'
import seo from '../images/icons/seo-blue.svg'
import design from '../images/icons/web-design.svg'
import info from '../images/icons/info.svg'

class Features extends Component {
  constructor(props) {
    super(props)
    this.state = { infoToggleOn: false }
    this.state = { infoToggleOnSEO: false }
    this.handleMouseEnterCMS = this.handleMouseEnterCMS.bind(this)
    this.handleMouseLeaveCMS = this.handleMouseLeaveCMS.bind(this)
    this.handleMouseEnterSEO = this.handleMouseEnterSEO.bind(this)
    this.handleMouseLeaveSEO = this.handleMouseLeaveSEO.bind(this)
  }
  handleMouseEnterCMS(e) {
    this.setState(state => ({
      infoToggleOn: true,
    }))
  }

  handleMouseLeaveCMS(e) {
    this.setState(state => ({
      infoToggleOn: false,
    }))
  }

  handleMouseEnterSEO(e) {
    this.setState(state => ({
      infoToggleOnSEO: true,
    }))
  }

  handleMouseLeaveSEO(e) {
    this.setState(state => ({
      infoToggleOnSEO: false,
    }))
  }
  render() {
    return (
      <div className="features-section">
        <div className="features-row">
          <div className="features-warp">
            <h2>Attract Customers</h2>

            <div className="features-icon">
              <img width="40" height="40" src={fast} alt="fast icon" />
            </div>
            <h3>By Being Fast</h3>
            <p>
              Our websites are fast, really fast! We use the latest, most
              robust, cutting edge technology and follow the best practices to
              ensure both search engines and people love them.
            </p>
          </div>
          <div className="features-warp">
            <h2>Gain Trust</h2>
            <div className="features-icon">
              <img width="40" height="40" src={secure} alt="secure icon" />
            </div>
            <h3>By Being Secure</h3>
            <p>
              All of our websites have security features as standard. The bigger
              you get the more traffic you get. This is good except when you
              attract black hats!
            </p>
          </div>
          <div className="features-warp">
            <h2>Be Seen</h2>
            <div className="features-icon">
              <img
                width="40"
                height="40"
                src={responsive}
                alt="responsive icon"
              />
            </div>
            <h3>By Being Responsive</h3>
            <p>
              These days it is imperative that your website looks great on all
              screen sizes. We go one step further by ensuring that the design
              is fully dynamic.
            </p>
          </div>

          <div className="features-warp">
            <h2>Delight Customers</h2>
            <div className="features-icon">
              <img width="40" height="40" src={user} alt="user icon" />
            </div>
            <h3>By Being User Friendly</h3>
            <p>
              Different people see things wildly differently. Our experience
              allows us to build websites that make sense to the greatest number
              of people. Often this means keeping it simple, this is an art unto
              itself.
            </p>
          </div>

          <div className="features-warp">
            <h2>Reach Everyone</h2>
            <div className="features-icon">
              <img width="40" height="40" src={access} alt="access icon" />
            </div>
            <h3>By Being Accessible</h3>
            <p>
              Some of your customers use devices to see and hear the internet.
              We make sure we help them in that process. Not only is this good
              for humans, but Google values this too, which means better SEO for
              you.
            </p>
          </div>
          <div className="features-warp">
            <h2>Grow Your Business</h2>
            <div className="features-icon">
              <img width="40" height="40" src={strategy} alt="strategy icon" />
            </div>
            <h3>With Great Strategy</h3>
            <p>
              The internet is a competitive place requiring several well-honed
              skills to succeed. We have the expertise to tailor a strategy to
              make growing your business online as simple as possible.
            </p>
          </div>
        </div>
        <OurWork />
        <Banner
          sell="We Have The Perfect Package For You"
          button="Go To Prices"
          linkTo="/prices"
        />
        <div className="features-row">
          <div className="features-warp">
            <h2>Rank on Google</h2>
            <div className="features-icon">
              <img width="40" height="40" src={seo} alt="icon" />
            </div>
            <h3>
              With Great SEO
              <div
                onMouseEnter={this.handleMouseEnterSEO}
                onMouseLeave={this.handleMouseLeaveSEO}
                className="cms-info"
              >
                <img
                  alt="more information icon"
                  src={info}
                  width="15"
                  height="15"
                />
              </div>
              <div className="information-wrap">
                {this.state.infoToggleOnSEO ? (
                  <div className="information-inner">
                    <p>
                      <span className="highlight-info">SEO </span>stands for
                      Search Engine Optimisation.{' '}
                      <span className="highlight-info">SEO </span>
                      is the practice of increasing the chances that a site
                      ranks highly in the search results of major search engines
                      such as Google, Yahoo and Bing.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </h3>{' '}
            <p>
              We create websites where 'on-page SEO' comes as standard. However,
              we can go further and implement a data-driven ever-evolving
              website and marketing strategy to make sure you stay ahead of the
              curve.
            </p>
          </div>
          <div className="features-warp">
            <h2>Look Professional</h2>
            <div className="features-icon">
              <img width="40" height="40" src={design} alt="icon" />
            </div>
            <h3>With Great Design</h3>
            <p>
              Great design is hugely important at attracting and keeping
              customers. People will choose a product based on how it looks, and
              they will judge a book by it's cover. We make sure that our
              designs tell a great story about your business.
            </p>
          </div>

          <div className="features-warp">
            <h2>Evolve &amp; Improve</h2>
            <div className="features-icon">
              <img
                width="40"
                height="40"
                src={analytics}
                alt="analytics icon"
              />
            </div>
            <h3>By Using Analytics</h3>
            <p>
              Data is king. Let's use it to make your business thrive we use a
              number of different technologies to help us make great decisions
              about how to help your business evolve and improve.
            </p>
          </div>
          <div className="features-warp">
            <h2>Fix Problems</h2>
            <div className="features-icon">
              <img width="40" height="40" src={support} alt="support icon" />
            </div>
            <h3>By Having Our Support</h3>
            <p>
              We want to build relationships with our clients. Websites need
              maintenance and iteration to keep customers satisfied, and to stay
              relevant. We are always here to help. Think of us as an extension
              of your business taking care of the web for you.
            </p>
          </div>
          <div className="features-warp">
            <h2>Sell Online</h2>
            <div className="features-icon">
              <img width="40" height="40" src={ecom} alt="ecom icon" />
            </div>
            <h3>With Our E-Commerce</h3>
            <p>
              Selling online is still in its early days, this industry will
              continue to grow exponentially. Make sure your website is designed
              with the customer and the future in mind. Think fast, secure,
              simple and scalable.
            </p>
          </div>
          <div className="features-warp">
            <h2>Do It Yourself</h2>
            <div className="features-icon">
              <img width="40" height="40" src={cms} alt="cms icon" />
            </div>
            <h3>
              With CMS
              <div
                onMouseEnter={this.handleMouseEnterCMS}
                onMouseLeave={this.handleMouseLeaveCMS}
                className="cms-info"
              >
                <img
                  alt="more information icon"
                  src={info}
                  width="15"
                  height="15"
                />
              </div>
              <div className="information-wrap">
                {this.state.infoToggleOn ? (
                  <div className="information-inner">
                    <p>
                      <span className="highlight-info">CMS</span> stands for
                      Content Management System. A{' '}
                      <span className="highlight-info">CMS</span> allows someone
                      with no coding or programming skill to make changes to a
                      website.
                    </p>
                  </div>
                ) : (
                  ' '
                )}
              </div>
            </h3>
            <p>
              We use have chosen Content Management Systems that are easy to use
              and SEO friendly. They are also faster and more secure than the
              more traditional technologies.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Features
