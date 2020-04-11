import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// old time way
const getSiteData = graphql`
  query GetSiteData2 {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const RegularHeader = () => (
  <StaticQuery
    query={getSiteData}
    render={data => {
      return (
        <div>
          <h1>title123: {data.site.siteMetadata.title}</h1>
          <h1>author: {data.site.siteMetadata.author}</h1>
        </div>
      )
    }}
  ></StaticQuery>
)

export default RegularHeader
