import styled from 'styled-components'

export const LoginContainer = styled.form`
  background-color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  width: 350px;
  max-width: 100%;
  padding: 30px 20px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #000000;
`
export const InputContainer = styled.input`
  color: ${props => (props.bgColor ? '#ffffff' : '#000000')};
  width: 100%;
  border-radius: 5px;
  border: 2px solid #cbd5e1;
  height: 35px;
  padding-left: 20px;
  margin: 7px 0 7px 0;
  background-color: transparent;
`
