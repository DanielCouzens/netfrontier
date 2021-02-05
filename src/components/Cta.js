import React from 'react'
import { Link } from 'gatsby'
import chev from '../images/icons/chev.png'

const Cta = ({ name, link }) => {
  return (
    <Link to={link}>
      <div className="call-to-action">
        <span>{name}</span>
        {/* <img src={chev} alt="" /> */}
      </div>
    </Link>
  )
}

export default Cta
