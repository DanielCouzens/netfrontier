import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

const success = () => {
  return (
    <Layout>
      <Seo title="Success" description="Thanks for contacting us." />
      <div className="success-wrap">
        <h1>Success</h1>
        <p> Thanks for contacting us, we will be in touch soon!</p>
        <p>
          <Link to="/">Head Home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default success
