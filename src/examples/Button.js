import styled from "styled-components"
const color = "blue"

const Button = styled.button`
  color: red;
  background: ${color};
  font-size: 3rem;
`

export default Button

// usage:
// <Button>first button</Button>
// <Button color="yellow">second button</Button>
