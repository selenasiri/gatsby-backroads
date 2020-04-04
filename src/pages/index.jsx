import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"

const index = () => (
  <Layout>
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
  </Layout>
)

export default index
