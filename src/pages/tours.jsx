import React from 'react'
import Layout from '../components/Layout'
import Button from '../examples/Button'
import Header from '../examples/RegularHeader'
import SEO from '../components/SEO'
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'

const tours = () => {
  return (
    <Layout>
      <SEO title="Tours" />
      <h1>Tours</h1>

      <Header />
    </Layout>
  )
}

export default tours

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
