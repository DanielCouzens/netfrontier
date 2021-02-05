import React from 'react'

const Open = () => {
  return (
    <div className="open-info-wrap" id="opening-times">
      <div className="open-for-business">
        <h3>We are open and ready to work with you</h3>
        <p>
          Due to Covid 19 we are currently working from home and conducting our
          meetings safely via telephone and video conference platforms.
        </p>
      </div>
      <div className="opening-times">
        <div className="day">
          <div className="days">
            <p>Monday</p>
          </div>
          <div className="days">
            <p>Tuesday</p>
          </div>
          <div className="days">
            <p>Wednesday</p>
          </div>
          <div className="days">
            <p>Thursday</p>
          </div>
          <div className="days">
            <p>Friday</p>
          </div>
        </div>
        <div className="time">
          <div className="times">
            <p>
              <time>09:00</time> to <time> 17:00</time>
            </p>
          </div>
          <div className="times">
            <p>
              <time>09:00</time> to <time> 17:00</time>
            </p>
          </div>
          <div className="times">
            <p>
              <time>09:00</time> to <time> 17:00</time>
            </p>
          </div>
          <div className="times">
            <p>
              <time>09:00</time> to <time> 17:00</time>
            </p>
          </div>
          <div className="times">
            <p>
              <time>09:00</time> to <time> 17:00</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Open
