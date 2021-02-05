import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CookieConsent from 'react-cookie-consent'

const Layout = props => {
  return (
    <div className="layout" id="header">
      <Header />
      <div className="psuedo"></div>
      <div> {props.children}</div>

      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        enableDeclineButton
        declineButtonText="Decline"
        buttonStyle={{ background: '#ea7857', color: '#fff', fontSize: '13px' }}
        declineButtonStyle={{
          background: '#ea785780',
          color: '#fff',
          fontSize: '13px',
        }}
        cookieName="gatsby-gdpr-google-analytics"
      >
        <p
          style={{
            color: '#fff',
          }}
        >
          This site uses cookies ...
        </p>
      </CookieConsent>
    </div>
  )
}

export default Layout
