import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Testimonial from '../components/Testimonials'
import testimonialpic from '../images/testimonials/helen.jpg'
import Form from '../components/Form'
import Services from '../components/Services'
import Work from '../components/OurWork'
import BottomBanner from '../components/BottomBanner'
import Seo from '../components/Seo'
const services = () => {
  return (
    <Layout>
      <Seo
        title="Services"
        description="We can help you thrive online with a whole host of services. We offer web design, web development, online marketing, tech support, graphic design and branding."
      />
      <Title
        name="Our Services"
        description="Everything You Need To Thrive Online"
      />

      <Services />
      <Testimonial
        quotes="Net Frontier really do go above and beyond, this isn't just another web design agency, it's a company that genuinly cares."
        name="Helen"
        website="https://www.dorlands.co.uk/"
        photo={testimonialpic}
        company="Dorlands"
      />
      <Work />
      <BottomBanner />
    </Layout>
  )
}

export default services
