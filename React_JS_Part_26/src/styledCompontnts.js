import styled from 'styled-components'

export const Heading = styled.h1`
  color: blue;
  font-size: 24px;
  text-align: center;
`

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  border-radius: 4px;
  border: 2px solid #0070c1;
  color: ${props => (props.outline ? 'blue' : 'white')};
  background-color: ${props => (props.outline ? 'white' : 'blue')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => (props.outline ? '#e0e0e0' : '#005a9c')};
  }
`
