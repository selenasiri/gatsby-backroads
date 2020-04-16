import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import SEO from '../components/SEO'
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'

export default ({data}) => (

const index = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
<Banner
        title="continue exploring"
        info=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, aut?"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </StyledHero>
      
    <About />
    <Services />
  </Layout>
)
)
export const query `
query {
  defaultBcg: file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        src
      }
    }
  }
}
`
