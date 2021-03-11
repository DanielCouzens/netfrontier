import React from 'react'
import { Link } from 'gatsby'
import Quick from './Quick'
import Squares from './Squares'

const HeroOpt = () => {
  return (
    <div>
      <div className="hero-wrap">
        {/* <HeroImage /> */}

        <div className="mission-statement">
          <Squares />
          <h1>Do you need a new website?</h1>
          {/* <h1>The World Wide Web</h1>

          <h1>It's An Adventure</h1> */}
          <div className="sub-heading">
            <h2>We build websites designed to make your business thrive.</h2>
            {/* <h1>
              We build <span>websites</span> designed
              <br />
              to thrive in the wild!
            </h1> */}
          </div>

          <div className="button-wrap">
            <Link
              to="/our-process"
              data-sal="slide-left"
              data-sal-delay="100"
              data-sal-easing="ease-in"
            >
              <div className="call-to-action-white one">
                <span>Design Process</span>
              </div>
            </Link>
            <Link
              to="/questionnaire"
              data-sal="slide-left"
              data-sal-delay="200"
              data-sal-easing="ease-in"
            >
              <div className="call-to-action-white two">
                <span>Get Started</span>
              </div>
            </Link>
          </div>
          <Quick />
          {/* <div className="we-are-open">
            <Link to="/#opening-times">
              <h2>We are open</h2>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeroOpt
