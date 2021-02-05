import React from 'react'
import { Formik, Field } from 'formik'
import validationSchema from './Validation'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Forms = () => {
  return (
    <div className="contact-form">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': 'contact',
              ...values,
            }),
          })
            .then(() => {
              // this.props.history.push('/success')
              alert('Success')
              setSubmitting(false)
            })
            .catch(error => {
              alert('Error: Please Try Again!')
              setSubmitting(false)
            })
        }}
        render={({ touched, errors, isSubmitting, handleSubmit }) => (
          <form
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              {touched.name && errors.name && (
                <p className="danger">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" id="email" />
              {touched.email && errors.email && (
                <p className="danger">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field
                className="text-area"
                name="message"
                component="textarea"
                id="message"
                rows="6"
              />
              {touched.message && errors.message && (
                <p className="danger">{errors.message}</p>
              )}
            </div>
            <div className="form-buttons">
              <button
                name="submit"
                type="submit"
                disabled={isSubmitting}
                value="SUBMIT"
              >
                SUBMIT
              </button>
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default Forms
