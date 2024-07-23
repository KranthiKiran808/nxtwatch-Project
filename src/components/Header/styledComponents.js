import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#383838' : 'white')};
  color: ${props => (props.bgColor ? 'white' : 'black')};
  height: 100vh;
`
export const Button = styled.button`
  background-color: transparent;
  width: 100px;
  height: 30px;
  border: 1.5px solid ${props => (props.bgColor ? 'white' : 'black')};
  border-radius: 5px;
  font-weight: bold;
  color: ${props => (props.bgColor ? 'white' : 'black')};
`
