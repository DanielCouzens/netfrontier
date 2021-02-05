import React from 'react'

const Squares = () => {
  return (
    <div className="squares-container">
      <div
        data-sal="fade"
        data-sal-delay="0"
        data-sal-duration="800"
        data-sal-easing="ease-in"
        className="squares-hero-wrap squares-hero-wrap-one"
      >
        <div className="squares-hero one-square">
          <div className="inner-squares inner-square-one"></div>
        </div>
      </div>

      <div
        data-sal="fade"
        data-sal-delay="500"
        data-sal-duration="800"
        data-sal-easing="ease-in"
        className="squares-hero-wrap squares-hero-wrap-two"
      >
        <div className="squares-hero two-square">
          <div className="inner-squares inner-square-two"></div>
        </div>
      </div>

      <div
        data-sal="fade"
        data-sal-delay="1000"
        data-sal-duration="800"
        data-sal-easing="ease-in"
        className="squares-hero-wrap squares-hero-wrap-three"
      >
        <div className="squares-hero one-three">
          <div className="inner-squares inner-square-three"></div>
        </div>
      </div>
    </div>
  )
}

export default Squares
