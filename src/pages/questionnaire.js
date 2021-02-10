import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const questionaire = () => {
  return (
    <Layout>
      <Seo
        title="Questionnaire"
        description=" Fill out the form below and get you web design project rolling. We
            will be back in touch within 24 hours to discuss the
            information you have provided and give you a free no obligation
            personalised quote."
      />
      <div className="questionnaire-form">
        <h1>Get Your Website Project Started</h1>
        <div className="get-started-wrap">
          <p>
            Fill out the form below and get you web design project rolling. We
            will be back in touch within <span>24 hours</span> to discuss the
            information you have provided and give you a free no obligation
            personalised quote.{' '}
          </p>
        </div>
        <form
          action="/success"
          name="questionnaire"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="questionnaire" />
          <div className="questionnaire-contact-details">
            <div className="name-company-wrap">
              <div className="company-details q-one">
                <label htmlFor="Company">Company</label>
                <input type="text" name="company" id="company" />
              </div>
              <div className="company-details q-two">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
          </div>

          <div>
            <label htmlFor="question-one">
              1{')'} What would you like to achieve with your new website?
            </label>
            <textarea
              className="text-area"
              name="question-one"
              id="question-one"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-two">
              2{')'} Will you need a Content Management System? This allows you
              to make simple changes to the website yourself. Training is
              provided as part of our service.
            </label>
            <textarea
              className="text-area"
              name="question-two"
              id="question-two"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-three">3{')'} Will you need a blog?</label>
            <textarea
              className="text-area"
              name="question-three"
              id="question-three"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-four">
              4{')'} Do you have a logo and a brand colour scheme?
            </label>
            <textarea
              className="text-area"
              name="question-four"
              id="question-four"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-five">
              5{')'} Do you have text content and images for the website? If
              not, we can help source images and create text for you.
            </label>
            <textarea
              className="text-area"
              name="question-five"
              id="question-five"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-six">
              6{')'} What pages would you like on your website? E.g Home, About,
              Contact etc.
            </label>
            <textarea
              className="text-area"
              name="question-six"
              id="question-six"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-seven">
              7{')'} Do you require an online shop to sell your products?
            </label>
            <textarea
              className="text-area"
              name="question-seven"
              id="question-seven"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-eight">
              8{')'} Who do you see as your biggest competitors? This helps us
              ensure we create a website that has a competitive advantage.
            </label>
            <textarea
              className="text-area"
              name="question-eight"
              id="question-eight"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-nine">
              9{')'} Please provide up to three websites that you like the
              design and functionality of. They do not have to be in the same
              line of business
            </label>
            <textarea
              className="text-area"
              name="question-nine"
              id="question-nine"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-ten">
              10{')'} Do you already have a domain name? This is your website
              address e.g www.netfrontier.co.uk
            </label>
            <textarea
              className="text-area"
              name="question-ten"
              id="question-ten"
              rows="6"
            />
          </div>
          <div>
            <label htmlFor="question-eleven">
              11) Is there anything else you would like to add?
            </label>
            <textarea
              className="text-area"
              name="question-eleven"
              id="question-eleven"
              rows="6"
            />
          </div>
          <p>Thank you for taking the time to fill out this questionnaire</p>
          <div className="questionnaire-buttons">
            <button type="submit" value="SUBMIT">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default questionaire
