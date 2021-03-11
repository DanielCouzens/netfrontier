import React, { Component } from 'react'
import { Link } from 'gatsby'
import MobileNav from '../components/MobileNav'
import Logo from '../images/logo/square-logo.svg'
import fb from '../images/icons/001-facebook-orange.svg'
import li from '../images/icons/inkedin-orange.svg'
import ig from '../images/icons/002-instagram-orange.svg'

class Header extends Component {
  // navDrop() {
  //   let navList = document.querySelector('.drop-down')
  //   navList.style.top = '-250px'
  // }
  // navLink() {
  //   let navList = document.querySelector('.drop-down')
  //   navList.style.top = '72px'
  // }

  render() {
    return (
      <>
        <div className="header-wrap">
          <Link className="logo-container-wrap" to="/">
            <div className="logo">
              <img width="40" height="40" src={Logo} alt="Net Frontier Logo" />
            </div>
            <div className="logo-container">
              <div className="logo-net-frontier">
                <p>NET FRONTIER</p>
              </div>

              <div className="logo-subheading">
                <p> web design made simple</p>
              </div>
            </div>
          </Link>
          <MobileNav />

          <div className="nav-link-container">
            <div className="contact-details">
              <div className="tel">
                <p>
                  <span>
                    <a href="tel:01454 616080">Call us: 01454 616080</a>
                  </span>
                </p>
              </div>
              <div className="social-links">
                <a
                  rel="noopener"
                  href="https://www.facebook.com/netfrontier.co.uk/"
                  target="_blank"
                >
                  <img
                    src={fb}
                    width="25"
                    height="25"
                    alt="facebook icon link to Netfrontier web design graphic design Social account"
                  />
                </a>
                <a
                  rel="noopener"
                  href="https://www.linkedin.com/company/43254516/admin/"
                  target="_blank"
                >
                  <img
                    width="25"
                    height="25"
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
                    width="25"
                    height="25"
                    src={ig}
                    alt="instagram icon link to Netfrontier web design graphic design Social account"
                  />
                </a>
              </div>
            </div>

            <div className="nav">
              <ul>
                <li>
                  <Link
                    to="/"
                    activeStyle={{
                      fontWeight: '800',
                      color: '#ea7857',
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
                      color: '#ea7857',
                    }}
                  >
                    About
                  </Link>
                </li>

                <li
                // onMouseOver={() => this.navLink()}
                >
                  <Link
                    to="/services"
                    activeStyle={{
                      fontWeight: '800',
                      color: '#ea7857',
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
                      color: '#ea7857',
                    }}
                  >
                    Prices
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-process"
                    activeStyle={{
                      fontWeight: '800',
                      color: '#ea7857',
                    }}
                  >
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    activeStyle={{
                      fontWeight: '800',
                      color: '#ea7857',
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
                      color: '#ea7857',
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
                      color: '#ea7857',
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <ul className="drop-down" onMouseLeave={() => this.navDrop()}>
          <li className="drop-down-links">
            <Link
              to="/website-design"
              activeStyle={{
                fontWeight: '800',
                color: '#ea7857',
              }}
            >
              Website Design
            </Link>
          </li>
          <li className="drop-down-links">
            <Link
              to="/website-development"
              activeStyle={{
                fontWeight: '800',
                color: '#ea7857',
              }}
            >
              Website Development
            </Link>
          </li>
          <li className="drop-down-links">
            <Link
              to="/website-support"
              activeStyle={{
                fontWeight: '800',
                color: '#ea7857',
              }}
            >
              Website Support
            </Link>
          </li>
        </ul> */}
      </>
    )
  }
}

export default Header
