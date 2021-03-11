import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/TitleAbout'
import testimonialpictwo from '../images/testimonials/richard.jpg'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'
import BottomBanner from '../components/BottomBanner'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

const about = () => {
  return (
    <Layout>
      <Seo
        title="About"
        description="Based in the South West of England, and with ten years of
              experience, Dan creates innovative cutting edge, and super-fast
              websites for clients looking for a blend of style, functionality
              and competitive advantage."
      />
      <Title
        name="About Us"
        description="The web is constantly evolving and so do we"
      />
      <section className="about-us-section">
        <div className="about-us-row">
          <div className="about-us-text about-top">
            <h2>Meet The Team</h2>
            <p>Net Frontier was created by Dan Couzens.</p>
            <p>
              Based in the South West of England, and with ten years of
              experience, Dan creates innovative cutting edge, and super-fast
              websites for clients looking for a blend of style, functionality
              and competitive advantage.
            </p>

            <p>
              In his spare time Dan is a lead singer and guitarist in a rock
              band, mentors aspiring performers, and runs creative and
              philosophical weekend retreats. He lives with his wife in Bristol.
            </p>
            <Cta name="Contact Us" link="/contact" />
          </div>
          <div className="welcome-pic-about">
            <div className="dan-pic"></div>
          </div>
        </div>
      </section>
      <div className="about-section-wrap">
        <div className="about-content-wrap">
          <div className="about-wrap about-reverse">
            <div className="about-text about what-we-offer">
              <h2>What We Offer</h2>
              <div className="list-outer-wrap">
                <div className="list-wrap">
                  <ul>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="100"
                      data-sal-easing="ease-in"
                    >
                      Super Fast Websites
                    </li>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="200"
                      data-sal-easing="ease-in"
                    >
                      Free Hosting
                    </li>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="300"
                      data-sal-easing="ease-in"
                    >
                      Custom Websites
                    </li>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="400"
                      data-sal-easing="ease-in"
                    >
                      Amazing Support
                    </li>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="500"
                      data-sal-easing="ease-in"
                    >
                      Cutting Edge Technology
                    </li>
                  </ul>
                </div>
                <div className="list-wrap">
                  <ul>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="600"
                      data-sal-easing="ease-in"
                    >
                      SEO as Standard
                    </li>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="700"
                      data-sal-easing="ease-in"
                    >
                      Accessibility as Standard
                    </li>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="800"
                      data-sal-easing="ease-in"
                    >
                      Security as Standard
                    </li>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="900"
                      data-sal-easing="ease-in"
                    >
                      GDPR Compliant
                    </li>
                    <li
                      data-sal="slide-up"
                      data-sal-delay="1000"
                      data-sal-easing="ease-in"
                    >
                      Headless CMS
                    </li>
                  </ul>
                </div>
              </div>

              <Cta name="See Services" link="/services" />
            </div>
            <div className="about-pic about offer"></div>
          </div>
        </div>
        <div className="about-content-wrap ">
          <div className="about-wrap ">
            <div className="about-text about">
              <h2>Custom, Bespoke, Handcrafted</h2>
              <p>
                Everyone one of our websites is bespoke, unique and handcrafted,
                we do not use templates. We love to code and aspire to make our
                code as beautiful as our websites. Our experience allows us to
                create workflows that deliver the highest quality websites
                whilst remaining affordable.
              </p>
              <p>
                A hand-coded website is still the best way to go, especially
                when you combine this with the future of the web which is a {''}
                <Link
                  to="/faq#headless-cms"
                  target="_blank"
                  activeStyle={{
                    fontWeight: '800',
                    color: '#ea7857',
                  }}
                >
                  headless CMS
                </Link>{' '}
                and the jam stack.
              </p>
              <Cta name="See Prices" link="/prices" />
            </div>
            <div className="about-pic about expensive"></div>
          </div>
        </div>
        <Testimonials
          quotes="Check out my awesome author website care of Net Frontier. It's super cool, super sexy, and super fast. Thank you."
          name="Richard"
          website="https://www.richardweale.com/"
          photo={testimonialpictwo}
          company="Richard Weale"
        />
        <div className="about-content-wrap ">
          <div className="about-wrap about-reverse">
            <div className="about-text about">
              <h2>Why Choose Us?</h2>
              <h3>3 reasons just for starters</h3>
              <h4
                className="h4-green"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >
                <span>1</span>The Latest Website Technology
              </h4>
              <p>
                We specialise in single-page applications and{' '}
                <Link
                  to="/faq#headless-cms"
                  activeStyle={{
                    fontWeight: '800',
                    color: '#ea7857',
                  }}
                >
                  headless CMS's
                </Link>
                . You will have access to the tools that 28% of the Fortune 500
                companies use, allowing you to compete in your industry whilst
                simultaneously providing the most compelling customer
                experiences.
              </p>
              <h4
                className="h4-blue"
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-easing="ease-in"
              >
                <span>2</span>The Fastest Website Possible
              </h4>
              <p>
                Speed matters; our websites perform in the top 5 percentile of
                all website on the planet, search engines favour websites that
                load quickly. We will also send you independent reports from
                Google and other respected companies such as Semrush to prove
                it. So you are safe in the knowledge that you are not loosing
                business due to having sluggish website.
              </p>
              <h4
                className="h4-orange"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease-in"
              >
                <span>3</span>Fantastic Training
              </h4>
              <p>
                Dan Couzens has over twenty years experience in teaching various
                subjects and understands that learning something new can be
                quite a challenge. Therefore we will be with you every step of
                the way until you are totally confident with how your website
                works.
              </p>
              <p>
                Even then we have a range of support packages to suit everyone.{' '}
              </p>

              <Cta name="Learn More" link="/our-process" />
            </div>
            <div className="about-pic about why"></div>
          </div>
        </div>
      </div>
      <BottomBanner />
    </Layout>
  )
}

export default about
