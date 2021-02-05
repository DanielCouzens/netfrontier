import React from 'react'
import quote from '../images/icons/left-quotes-sign.svg'
import star from '../images/testimonials/star.png'

const Testimonials = ({ quotes, name, photo, website, company }) => {
  return (
    <div className="testimonials">
      <div className="testimonial-img">
        <img width="70" height="70" src={photo} alt="" />
      </div>
      <div
        className="animate"
        data-sal="slide-left"
        data-sal-delay="100"
        data-sal-easing="ease-in"
      >
        <div className="stars">
          <img
            data-sal="slide-left"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            width="15"
            height="15"
            src={star}
            alt="icon of a star"
          />
          <img
            data-sal="slide-left"
            data-sal-delay="550"
            data-sal-easing="ease-in"
            width="15"
            height="15"
            src={star}
            alt="icon of a star"
          />
          <img
            data-sal="slide-left"
            data-sal-delay="700"
            data-sal-easing="ease-in"
            width="15"
            height="15"
            src={star}
            alt="icon of a star"
          />
          <img
            data-sal="slide-left"
            data-sal-delay="850"
            data-sal-easing="ease-in"
            width="15"
            height="15"
            src={star}
            alt="icon of a star"
          />
          <img
            data-sal="slide-left"
            data-sal-delay="1000"
            data-sal-easing="ease-in"
            width="15"
            height="15"
            src={star}
            alt="icon of a star"
          />
        </div>
        <div className="quote-text">
          <span className="quote-one">
            <img width="20" height="20" src={quote} alt="" />
          </span>
          <q>{quotes}</q>
          <span className="quote-two">
            <img width="20" height="20" src={quote} alt="" />
          </span>
        </div>
        <div className="testimonial-name">
          <h3>{name}</h3>
          <a rel="noopener" href={website} target="_blank">
            {company}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
