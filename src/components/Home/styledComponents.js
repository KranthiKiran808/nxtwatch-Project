import styled from 'styled-components'

const MainContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#383838' : 'white')};
  color: ${props => (props.bgColor ? 'white' : 'black')};
  height: 100vh;
`
export default MainContainer
