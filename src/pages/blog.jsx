import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const blog = ({ data }) => {
  console.log('yyy', data)

  return (
    <Layout>
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

export default blog
