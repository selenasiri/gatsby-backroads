import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'

const contact = () => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid}>

      </StyledHero>
      <SEO title="Contact" />
      <h1>Contact</h1>
    </Layout>
  )
}

export default contact

export const query `
query {
  contactBcg: file(relativePath:{eq:"connectBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        src
      }
    }
  }
}
`
