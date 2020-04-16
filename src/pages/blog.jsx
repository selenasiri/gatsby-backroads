import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'

const blog = ({ data }) => {
  console.log('yyy', data)

  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}/>
      <SEO title="Blog" />
      <h1>blog</h1>

      <h1>title: {data.site.siteMetadata.title}</h1>
      <h1>author: {data.site.siteMetadata.author}</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

export const query `
query {
  blogBcg: file(relativePath:{eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        src
      }
    }
  }
}
`

export default blog
