import React from 'react'
import Tour from '../Tours/Tour'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      nodes {
        name
        price
        slug
        country
        id: contentful_id
        days
        images {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const data = useStaticQuery(getTours)
  const tours = data.featuredTours.nodes
  console.log(tours)

  console.log('ssss', data)

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />

      <div className={styles.center}>
        {tours.map(node => {
          return <Tour key={node.id} tour={node} />
        })}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
