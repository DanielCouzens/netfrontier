import React from 'react'

// Icons
import webDesign from '../images/service-icons/web-design-blue.svg'
import webDevelopment from '../images/service-icons/web-development-blue.svg'
import onlineMarketing from '../images/service-icons/marketing-blue.svg'
import techSuppport from '../images/service-icons/tech-support-blue.svg'
import graphicDesign from '../images/service-icons/graphic-design-blue.svg'
import branding from '../images/service-icons/branding-blue.svg'

const Services = () => {
  return (
    <div className="quick-section">
      <div className="quick-row">
        <div
          className="quick-warp"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-in"
        >
          <h2>Design</h2>

          <div className="quick-icon quick-one">
            <img
              width="40"
              height="40"
              src={webDesign}
              alt="Net Frontiers Web Design Icon"
            />
          </div>
        </div>
        <div
          className="quick-warp"
          data-sal="slide-left"
          data-sal-delay="400"
          data-sal-easing="ease-in"
        >
          <h2>Develop</h2>
          <div className="quick-icon quick-two">
            <img
              width="40"
              height="40"
              src={webDevelopment}
              alt="Net Frontiers Web Development Icon"
            />
          </div>
        </div>
        <div
          className="quick-warp"
          data-sal="slide-left"
          data-sal-delay="500"
          data-sal-easing="ease-in"
        >
          <h2>Market</h2>
          <div className="quick-icon quick-three">
            <img
              width="40"
              height="40"
              src={onlineMarketing}
              alt="Net Frontiers Online Marketing Icon"
            />
          </div>
        </div>

        <div
          className="quick-warp"
          data-sal="slide-left"
          data-sal-delay="600"
          data-sal-easing="ease-in"
        >
          <h2>Support</h2>
          <div className="quick-icon quick-four">
            <img
              width="40"
              height="40"
              src={techSuppport}
              alt="Net Frontiers Tech Support Icon"
            />
          </div>
        </div>

        <div
          className="quick-warp"
          data-sal="slide-left"
          data-sal-delay="700"
          data-sal-easing="ease-in"
        >
          <h2>Graphics</h2>
          <div className="quick-icon quick-five">
            <img
              width="40"
              height="40"
              src={graphicDesign}
              alt="Net Frontiers Graphic Design Icon"
            />
          </div>
        </div>
        <div
          className="quick-warp"
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-easing="ease-in"
        >
          <h2>Brand</h2>
          <div className="quick-icon quick-six">
            <img
              width="40"
              height="40"
              src={branding}
              alt="Net Frontiers Branding Icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
