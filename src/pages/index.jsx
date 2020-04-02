import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

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
  </Layout>
)

export default index
