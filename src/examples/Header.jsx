import React from 'react'
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
const Header = () => {
  const data = useStaticQuery(getSiteData)

  return (
    <div>
      <h1>title: {data.site.siteMetadata.title}</h1>
      <h1>author: {data.site.siteMetadata.author}</h1>
    </div>
  )
}

export default Header

// usage:
// <Header />

/*
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "BackRoads",
        "author": "@johndoe"
      }
    }
  }
}
*/
