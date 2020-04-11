import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const SEO = props => {
  const data = useStaticQuery(getSiteData)

  return <Helmet title={`${props.title} | ${data.site.siteMetadata.title}`} />
}

export default SEO
