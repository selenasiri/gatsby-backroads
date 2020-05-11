import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Tour from './Tour'
import Title from '../Title'

const TourList = props => {
  const [tours, setTours] = useState([])
  const [sortedTours, setSortedTours] = useState([])

  useEffect(() => {
    setTours(props.tours.nodes)
    setSortedTours(props.tours.nodes)
  }, [])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(node => {
          return <Tour key={node.id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default TourList
