import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
// import img from '../../images/defaultBcg.jpeg'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
  {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  console.log('YYYYY', aboutImage)
  return (
    <section className={styles.about}>
      hello from about
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="awesome" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias
            eum debitis.</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias
            eum debitis.</p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}
export default About
