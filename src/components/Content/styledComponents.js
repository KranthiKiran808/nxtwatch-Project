import styled from 'styled-components'

export const ContentContainer = styled.div`
  background-color: ${props => (props.bgColor ? 'black' : '#f1f5f8')};
  color: ${props => (props.bgColor ? 'white' : 'black')};
  width: 100%;
`
