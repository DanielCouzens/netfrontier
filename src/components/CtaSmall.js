import React from 'react'
import { Link } from 'gatsby'

const CtaSmall = ({ name, link }) => {
  return (
    <Link to={link}>
      <div className="call-to-action-small">
        <span>{name}</span>
      </div>
    </Link>
  )
}

export default CtaSmall
