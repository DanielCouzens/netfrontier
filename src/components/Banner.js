import React from 'react'
import { Link } from 'gatsby'

const Banner = ({ button, sell, linkTo }) => {
  return (
    <div className="banner ">
      <div className="inner-banner">
        <h2>{sell}</h2>
        <Link to={linkTo}>
          <div className="call">
            <button>
              <span>{button}</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Banner
