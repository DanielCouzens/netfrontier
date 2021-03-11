import React from 'react'
const HeroOpt = props => {
  return (
    <div>
      <div className="hero-wrap-standard">
        <div className="squares-container-standard">
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="800"
            data-sal-easing="ease-in"
            className="square-wrap-standard"
          >
            <div className={`square-standard ${props.colour}`}>
              <div className="inner-squares inner-square-one"></div>
            </div>
          </div>

          <div
            data-sal="fade"
            data-sal-delay="500"
            data-sal-duration="800"
            data-sal-easing="ease-in"
            className="square-wrap-standard square-wrap-two-standard"
          >
            <div className="square-standard square-standard-two">
              <div className="inner-squares inner-square-two"></div>
            </div>
          </div>

          <div
            data-sal="fade"
            data-sal-delay="1000"
            data-sal-duration="800"
            data-sal-easing="ease-in"
            className="square-wrap-standard square-wrap-three-standard"
          >
            <div className="square-standard square-standard-three">
              <div className="inner-squares inner-square-three"></div>
            </div>
          </div>
        </div>
        <div className="mission-statement-standard">
          <h1>{props.title}</h1>
          <div className="sub-heading-standard">
            <h2>{props.tagline}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOpt
