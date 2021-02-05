import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFound = () => {
  return (
    <Layout>
      <Seo
        title="Page Not Found"
        description="Sorry the page you are looking for doesn't exist!"
      />
      <div className="not-found">
        <h1>Sorry This Page Doesn't Exist!</h1>
        <p>
          <Link to="/">Head Home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
