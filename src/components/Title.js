import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}
const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
`

export default Title
