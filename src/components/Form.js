import React from 'react'
import { Formik, Field } from 'formik'

const Forms = () => {
  return (
    <div className="contact-form">
      <form
        action="/success"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="text-area"
            name="message"
            id="message"
            rows="6"
          />
        </div>
        <div className="form-buttons">
          <button type="submit" value="SUBMIT">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

export default Forms
