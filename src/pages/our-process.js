import React from 'react'
import BottomBanner from '../components/BottomBanner'
import Title from '../components/TitleProcess'
import Layout from '../components/Layout'
import contract from '../images/icons/001-contract.svg'
import design from '../images/icons/003-ruler.svg'
import build from '../images/icons/002-data.svg'
import launch from '../images/icons/004-fast.svg'
import support from '../images/icons/005-tools.svg'
import analize from '../images/icons/007-data-analytics.svg'
import market from '../images/icons/006-marketing.svg'
import develop from '../images/icons/008-coding.svg'
import contact from '../images/icons/contact.svg'
import CTA from '../components/Cta'
import Seo from '../components/Seo'

const ourProcess = () => {
  return (
    <Layout>
      <Seo
        title="Our Process"
        description="We have a simple 6 step process from enquiry to the launching of
            your site. We believe in creating as much clarity from the get-go as
            this ensures that we are both on the same page every step of the
            way."
      />
      <Title
        name="Just 6 Steps"
        description="To creating a world beating website"
      />
      <section className="our-process">
        <div className="our-process-row">
          <h2>Our 6 Step Process</h2>
          <p>
            We have a simple 6 step process from enquiry to the launching of
            your site. We believe in creating as much clarity from the get-go as
            possible. This ensures that we are both on the same page every step
            of the way.
          </p>
          <CTA name="Get In Touch" link="/contact" />
        </div>

        <div className="steps-wrap">
          <div className="step">
            <div className="step-pic step-pic-one">
              <img src={contact} alt="sign up icon net frontier" />
            </div>
            <div className="step-inner step-one">
              <h3>
                <span>1</span> Enquire
              </h3>
              <p>
                Get in touch and we can have an informal chat about all the
                things you would like to achieve with your business online. No
                one knows your business better than you so we will spend the
                time listening and asking the right questions to make sure we
                understand your needs and requirements.
              </p>
              <p>
                After our initial conversation we will put together our
                suggestions for the best way to move forward and a quote. When
                you are happy we can move onto step 2.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-pic step-pic-two">
              <img src={contract} alt="sign up icon net frontier" />
            </div>
            <div className="step-inner step-two">
              <h3>
                <span>2</span> Sign-Up
              </h3>
              <p>
                When you sign-up we will arrange a contract between us which is
                as transparent and clear as humanly possible.
              </p>
              <p>
                For small projects we charge 50% of the overall fee at the
                beginning and 50% upon completion of the project. For larger
                projects we split it into three payments of 33%. These payments
                are taken at the start middle and end of the project.
              </p>
              <p>
                It's a good idea at this stage to make sure you have secured the
                domain you intend to use. We can help with the domain if needed.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-pic step-pic-three">
              <img src={design} alt="design icon net frontier" />
            </div>
            <div className="step-inner step-three">
              <h3>
                <span>3</span> Design
              </h3>
              <p>
                First we will put together a pallet of colours and fonts that
                are suitable for your brand if you haven't already provided
                this.
              </p>
              <p>
                Then using Photoshop we normally create three pages of the
                desktop version of your website and one page of a mobile
                friendly version. We then provide you with the pdf designs for
                you to approve.
              </p>
              <p>
                Of course at this stage we can make adjustments as necessary and
                fine tune the design.
              </p>

              <p>
                Once you are happy with everything we can move on to step 4.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-pic step-pic-four">
              <img src={build} alt="build icon net frontier" />
            </div>
            <div className="step-inner step-four">
              <h3>
                <span>4</span> Build
              </h3>
              <p>
                Now we begin coding the website on a temporary domain. When it
                is around the midway point we will provide you with a link to
                make sure you are happy with the progress.
              </p>
              <p>
                At this stage we can still be creative and make changes. During
                the build phase we will be in regular communication to keep you
                updated, and to let you know if there is any more content we
                need.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-pic step-pic-five">
              <img src={launch} alt="launch icon net frontier" />
            </div>
            <div className="step-inner step-five">
              <h3>
                <span>5</span> Launch
              </h3>
              <p>
                Your website has now been custom built and is ready to go live.
                We will now complete a comprehensive go-live checklist. This
                includes testing the website across different browsers and
                devices, ensuring the on-page SEO is complete and that the
                website is indexed by search engines such as Google.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-pic step-pic-six">
              <img src={support} alt="support icon net frontier" />
            </div>
            <div className="step-inner step-six">
              <h3>
                <span>6</span> Support
              </h3>
              <p>
                We appreciate that it can be quite daunting to suddenly have
                your website and not know what to do next. If you have chosen to
                have a CMS (Content Management System) then as part of our
                service, we will train you in how to use it until you are
                confident to manage it yourself.
              </p>
              <p>
                If you need anything beyond this point we will always be happy
                to help. We also provide online marketing and SEO solutions so
                please get in touch to find out more.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="evolve-title">
          <h3>Keep Growing Your Business By Marketing Your Website</h3>
        </div> */}
        {/* 
        <div className="evolve-steps">
          <div className="keep-evolving">
            <div className="evolve-inner evolve-one">
              <img src={analize} alt="analize icon net frontier" />
              <h3>
                <span>A</span> Analyse
              </h3>
              <p>
                <span>Where</span>
                are your customers?
              </p>

              <p>
                <span>Who</span>
                are your customers?
              </p>
              <p>
                <span>What</span>
                platforms are they on?
              </p>
            </div>
            <div className="evolve-inner evolve-two">
              <img src={market} alt="market icon net frontier" />
              <h3>
                <span>B</span> Market
              </h3>
              <p>
                <span>Ads</span>
                designed for your customers.
              </p>

              <p>
                <span>Content</span>
                customers need and want.
              </p>
              <p>
                <span>SEO</span>
                so you're easier to find.
              </p>
            </div>
            <div className="evolve-inner evolve-three">
              <img src={develop} alt="develop icon net frontier" />
              <h3>
                <span>C</span> Develop
              </h3>
              <p>
                <span>Data</span>gathering to improve strategy
              </p>

              <p>
                <span>Evolve</span>website to improve ROI
              </p>
              <p>
                <span>Scale</span>
                website to meet demands
              </p>
            </div>
          </div>
        </div> */}
      </section>
      <BottomBanner />
    </Layout>
  )
}

export default ourProcess
