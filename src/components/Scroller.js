import React, { Component } from 'react'
// eslint-disable-next-line
import { Link, animateScroll as scroll } from 'react-scroll'
import chev from '../images/icons/chev.png'

class Scroller extends Component {
  render() {
    return (
      <div className="scroller">
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-140}
          duration={300}
        >
          {/* <img src={chev} alt="up arrow to scroll page" /> */}
          <img
            width="24"
            height="15"
            src={chev}
            alt="up arrow to scroll page"
          />
        </Link>
      </div>
    )
  }
}

export default Scroller
