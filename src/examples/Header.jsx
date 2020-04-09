import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getSiteData)
  const { siteMetadata } = data.site

  console.log(siteMetadata)

  return (
    <div>
      <h1>title: {siteMetadata.title}</h1>
      <h1>author: {siteMetadata.author}</h1>
    </div>
  )
}

export default Header

// usage:
// <Header />
