import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import SEO from '../components/SEO'

const index = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleHero>
      <Banner
        title="continue exploring"
        info=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, aut?"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)

export default index
