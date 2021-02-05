import React from 'react'
import { Link } from 'gatsby'

const BottomBanner = () => {
  return (
    <div className="bottom-banner">
      <h3>Get in touch</h3>

      <p>
        {' '}
        We are always happy to help. Call us on 01454 616080 or{' '}
        <Link to="/contact">Contact Us</Link>
      </p>
    </div>
  )
}

export default BottomBanner
