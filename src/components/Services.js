import React from 'react'

// Icons
import webDesign from '../images/service-icons/web-design.svg'
import webDevelopment from '../images/service-icons/web-development.svg'
import onlineMarketing from '../images/service-icons/marketing.svg'
import techSuppport from '../images/service-icons/tech-support.svg'
import graphicDesign from '../images/service-icons/graphic-design.svg'

import branding from '../images/service-icons/branding.svg'

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-row">
        <div className="services-warp">
          <h2>Website Design</h2>

          <div className="services-icon">
            <img src={webDesign} alt="Net Frontiers Web Design Icon" />
          </div>
          <p>
            All our websites are hand-coded and unique. This means we can design
            anything you want or need for your business. We also design with
            performance and SEO in mind meaning that you will have a website
            that competes with the best of them.
          </p>
        </div>
        <div className="services-warp">
          <h2>Web Development</h2>
          <div className="services-icon">
            <img
              src={webDevelopment}
              alt="Net Frontiers Web Development Icon"
            />
          </div>
          <p>
            A good website is one that is regularly updated to ensure that it
            stays up to date with the fast moving world of the internet. Stay
            ahead of the curve by allowing us to keep a finger on the pulse for
            you with one of our maintenance and evolve packages. Get in touch to
            find out more.
          </p>
        </div>
        <div className="services-warp">
          <h2>Online Marketing</h2>
          <div className="services-icon">
            <img
              src={onlineMarketing}
              alt="Net Frontiers Online Marketing Icon"
            />
          </div>
          <p>
            The internet is so powerful at making businesses successful, you
            just need to use the right tools and implement the right strategy
            for your audience. If you are not sure what the next step is for you
            please get in touch to find out how we can help.
          </p>
        </div>

        <div className="services-warp">
          <h2>Tech Support</h2>
          <div className="services-icon">
            <img src={techSuppport} alt="Net Frontiers Tech Support Icon" />
          </div>
          <p>
            Once you have created a website with us we will continually be on
            hand with any tech questions. We can help fix problems integrate
            third party software and advise on the best way forward no matter
            what your technology needs may be.
          </p>
        </div>

        <div className="services-warp">
          <h2>Graphic Design</h2>
          <div className="services-icon">
            <img src={graphicDesign} alt="Net Frontiers Graphic Design Icon" />
          </div>
          <p>
            We can offer a full design service, creating anything from logos to
            business cards to brochures and posters. We can also arrange
            printing and delivery of these marketing materials so there is
            nothing for you to think about; leave it with us and we will get it
            done.
          </p>
        </div>
        <div className="services-warp">
          <h2>Branding</h2>
          <div className="services-icon">
            <img src={branding} alt="Net Frontiers Branding Icon" />
          </div>
          <p>
            Does your brand need an overhaul, new logo, new colours, new
            audience? Get in touch to discuss your goals and we can help you
            with your brand strategy or simply help you hone your existing one.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
