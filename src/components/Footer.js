import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo/square-logo.svg'
import fb from '../images/icons/001-facebook.svg'
import li from '../images/icons/inkedin.svg'
import ig from '../images/icons/002-instagram.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-nav">
          <ul>
            <li>
              <Link
                to="/"
                activeStyle={{
                  fontWeight: '800',
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                activeStyle={{
                  fontWeight: '800',
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                activeStyle={{
                  fontWeight: '800',
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/prices"
                activeStyle={{
                  fontWeight: '800',
                }}
              >
                Prices
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                activeStyle={{
                  fontWeight: '800',
                }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                activeStyle={{
                  fontWeight: '800',
                }}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                activeStyle={{
                  fontWeight: '800',
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="logo-container-footer">
          <Link to="/">
            <div className="logo-footer">
              <img width="40" height="40" src={Logo} alt="Net Frontier Logo" />
            </div>
          </Link>

          <div className="logo-wordmark-footer">
            <div className="logo-net-frontier-footer">
              <h3>
                {/* NET<span>FRONTIER</span> */}
                NET FRONTIER
              </h3>
            </div>
            <div className="logo-subheading-footer">
              <h4>web design made simple</h4>
            </div>
          </div>

          <a href="mailto:info@netfrontier.co.uk">info@netfrontier.co.uk</a>
          <div className="social-links">
            <a
              rel="noopener"
              href="https://www.facebook.com/netfrontier.co.uk/"
              target="_blank"
            >
              <img
                src={fb}
                width="20"
                height="20"
                alt="facebook icon link to Netfrontier web design graphic design Social account"
              />
            </a>
            <a
              rel="noopener"
              href="https://www.linkedin.com/company/43254516/admin/"
              target="_blank"
            >
              <img
                width="20"
                height="20"
                src={li}
                alt="linked in icon link to Netfrontier web design graphic design Social account"
              />
            </a>
            <a
              rel="noopener"
              href="https://www.instagram.com/netfrontier.co.uk/"
              target="_blank"
            >
              <img
                width="20"
                height="20"
                src={ig}
                alt="instagram icon link to Netfrontier web design graphic design Social account"
              />
            </a>
          </div>
        </div>

        <div className="footer-address">
          <p>NET FRONTIER</p>
          <p className="icon-footer icon-footer-address">110 Hickory Lane</p>
          <p>Almondsbury</p>
          <p>Bristol</p>
          <p>BS32 4FN</p>
          <a
            rel="noopener"
            className="icon-footer icon-footer-mobile"
            href="tel:07415 095025"
          >
            07415 095025
          </a>
          <p className="icon-footer icon-footer-tel">01454 616080</p>
        </div>
      </div>

      <div className="footer-bottom">
        <Link to="/privacy">Privacy Policy</Link>
        <span>&copy; {new Date().getFullYear()} Net Frontier</span>
        <div className="directory">
          <a
            rel="noopener"
            href="https://www.web-design-directory-uk.co.uk/bristol.htm"
            target="_blank"
          >
            Web Design Directory
          </a>{' '}
          - A list of website designers in Bristol.
        </div>
      </div>
    </footer>
  )
}
export default Footer
