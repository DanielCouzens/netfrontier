import { Link } from 'gatsby'
import React, { Component } from 'react'

let countNav = 0

class MobileNav extends Component {
  navClick() {
    countNav += 1
    const navIcon = document.querySelector('.ham')
    navIcon.classList.toggle('active')
    let navList = document.querySelector('.mobile-nav')

    switch (countNav) {
      case 1:
        navList.style.transform = 'translateX(-100vw)'
        break
      case 2:
        navList.style.transform = 'translateX(0px)'
        countNav = 0
        break
      default:
        navList.style.transform = 'translateX(0px)'
        countNav = 0
    }
  }

  componentDidMount() {
    countNav = 0
  }

  render() {
    return (
      <div className="nav-wrap">
        <div className="navIcon">
          <svg
            className="ham hamRotate ham1"
            viewBox="0 0 100 100"
            width="40"
            onClick={() => this.navClick()}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
        <div className="mobile-nav">
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
                to="/our-process"
                activeStyle={{
                  fontWeight: '800',
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
      </div>
    )
  }
}

export default MobileNav
