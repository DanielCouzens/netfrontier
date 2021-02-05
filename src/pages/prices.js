import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/TitlePrices'
import BottomBanner from '../components/BottomBanner'
import Cta from '../components/Cta'
import Seo from '../components/Seo'

const prices = () => {
  return (
    <Layout>
      <Seo
        title="Prices"
        description="We have the perfect web design package for you. Check out our prices to get an idea of your project costs."
      />

      <Title
        name="Our Prices"
        description="We have a package that is perfect for you"
      />
      <div className="prices-section-top">
        <div className="prices-welcome">
          <h2>Our Web Design Prices</h2>
          <p>
            Our prices are not only competitive they come with a guarantee. We
            guarantee a website design that you will be delighted with and
            service that you are 100% satisfied with.
          </p>
          <p>
            All the prices below are a guideline of our charges, please contact
            us for a personalised quote.
          </p>

          <Cta name="Our Process" />
        </div>
      </div>
      <div className="prices-section">
        <div className="prices-row">
          <div className="price price-small-box prices-green">
            <div className="prices-title">
              <div className="from">
                <p> From</p>
              </div>
              <h3>&pound; 549</h3>
              <h3>3 Pages</h3>
              <div className="line-hr"></div>
              <p>Extra pages £149 each</p>
            </div>

            <ul className="ul-green">
              {/* <li>Free Domain Name - 1st Yr</li> */}
              <li>
                Free Hosting - <span>6 Months</span>
              </li>
              <li>
                Free SSL - <span>6 Months</span>
              </li>
              <li>Free CMS Training</li>
              <li>CMS</li>
              <li>Optional Blog</li>
              <li>On Page SEO</li>
              <li>Responsive</li>
              <li>Mobile Friendly</li>
              {/* <li>Fast Turnarounds</li> */}
              {/* <li>Advanced Technology</li> */}
              <li>Ongoing Support</li>
            </ul>
          </div>
          <div className="price prices-big-box prices-blue">
            <div className="prices-title">
              <div className="from">
                <p> From</p>
              </div>
              <h3>&pound; 849</h3>
              <h3>7 Pages</h3>
              <div className="line-hr"></div>
              <p>Extra pages £121 each</p>
            </div>

            <ul>
              {/* <li>Free Domain Name - 1st Yr</li> */}
              <li>
                Free Hosting - <span>6 Months</span>
              </li>
              <li>
                Free SSL - <span>1yr</span>
              </li>
              <li>Free CMS Training</li>
              <li>CMS</li>
              <li>Optional Blog</li>
              <li>On Page SEO</li>
              <li>Responsive</li>
              <li>Mobile Friendly</li>
              {/* <li>Fast Turnarounds</li> */}
              {/* <li>Advanced Technology</li> */}
              <li>Ongoing Support</li>
            </ul>
          </div>
          <div className="price prices-orange">
            <div className="prices-title">
              <div className="from">
                <p> From</p>
              </div>
              <h3>&pound; 1449</h3>
              <h3>15 Pages</h3>
              <div className="line-hr"></div>
              <p>Extra pages £95 each</p>
            </div>

            <ul>
              <li>
                Free Hosting - <span>1yr</span>
              </li>
              <li>
                Free SSL - <span>1yr</span>
              </li>
              <li>Free CMS Training</li>
              <li>CMS</li>
              <li>Optional Blog</li>
              <li>On Page SEO</li>
              <li>Responsive</li>
              <li>Mobile Friendly</li>
              {/* <li>Fast Turnarounds</li> */}
              {/* <li>Advanced Technology</li> */}
              <li>Ongoing Support</li>
            </ul>
          </div>
        </div>
        <div className="prices-row">
          <div className="price price-small-box prices-green">
            <div className="prices-title">
              <div className="from">
                <p> From</p>
              </div>
              <h3>&pound; 2149</h3>
              <h3>30 - 40 Pages</h3>
              <div className="line-hr"></div>
              <p>Extra pages £75 each</p>
            </div>

            <ul>
              <li>
                Free Hosting - <span>2yrs</span>
              </li>
              <li>
                Free SSL - <span>2yrs</span>
              </li>
              <li>Free CMS Training</li>
              <li>CMS</li>
              <li>Optional Blog</li>
              <li>On Page SEO</li>
              <li>Responsive</li>
              <li>Mobile Friendly</li>
              {/* <li>Fast Turnarounds</li> */}
              {/* <li>Advanced Technology</li> */}
              <li>Ongoing Support</li>
            </ul>
          </div>
          <div className="price prices-big-box prices-blue">
            <div className="prices-title">
              <div className="from">
                <p> From</p>
              </div>
              <h3>&pound; 2259</h3>
              <h3>E-Commerce</h3>
              <div className="line-hr"></div>
              <p></p>
            </div>

            <ul>
              <li>
                Free Hosting - <span>2yrs</span>
              </li>
              <li>
                Free SSL - <span>2yrs</span>
              </li>
              <li>Free CMS Training</li>
              <li>CMS</li>
              <li>50 Product Uploads</li>
              <li>Optional Blog</li>
              <li>On Page SEO</li>
              <li>Responsive</li>
              <li>Mobile Friendly</li>
              {/* <li>Fast Turnarounds</li> */}
              {/* <li>Advanced Technology</li> */}
              <li>Ongoing Support</li>
            </ul>
          </div>
          <div className="price prices-orange">
            <div className="prices-title">
              <div className="from">
                <p> From</p>
              </div>
              <h3>&pound; 349</h3>
              <h3>Landing Page</h3>
              <div className="line-hr"></div>
            </div>

            <ul>
              <li>Designed To Convert</li>
              <li>Create Leads</li>
              <li>On Page SEO</li>
              <li>Responsive</li>
              <li>Mobile Friendly</li>

              <li>Ongoing Support</li>
              <li>Designed to Convert</li>
              <li>Effective Marketing Tool</li>
            </ul>
          </div>
        </div>
      </div>
      <BottomBanner />
    </Layout>
  )
}

export default prices
