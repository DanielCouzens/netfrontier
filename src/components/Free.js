import React from 'react'
import success from '../images/icons/success.svg'
import successBlue from '../images/icons/success-blue.svg'
import successOrange from '../images/icons/success-orange.svg'

const Free = () => {
  return (
    <div className="free-section">
      <div
        className="free-wrap"
        // data-sal="slide-left"
        // data-sal-delay="150"
        // data-sal-easing="ease-in"
      >
        <div className="offer-free">
          <h2>
            <span>Free</span> Hosting
          </h2>
          {/* <span class="selected-plans">available on selected plans</span> */}
        </div>

        <img width="30" height="30" src={success} alt="tick icon" />
      </div>

      <div
        className="free-wrap"
        // data-sal="slide-left"
        // data-sal-delay="450"
        // data-sal-easing="ease-in"
      >
        <div className="offer-free">
          <h2>
            <span>Free</span> Training
          </h2>
          {/* <span class="selected-plans">available on selected plans</span> */}
        </div>

        <img width="30" height="30" src={successBlue} alt="tick icon" />
      </div>

      <div
        className="free-wrap"
        // data-sal="slide-left"
        // data-sal-delay="750"
        // data-sal-easing="ease-in"
      >
        <div className="offer-free">
          <h2>
            <span>Free</span> Security
          </h2>
          {/* <span class="selected-plans">available on selected plans</span> */}
        </div>

        <img width="30" height="30" src={successOrange} alt="tick icon" />
      </div>
    </div>
  )
}

export default Free
