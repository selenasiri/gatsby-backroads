import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import StyledHero from '../components/StyledHero'
import Tours from '../components/Tours/Tours'
import { graphql } from 'gatsby'
const toursPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>

      <Tours />
    </Layout>
  )
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default toursPage
