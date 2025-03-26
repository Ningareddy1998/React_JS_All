import styled from 'styled-components'

export const List = styled.li`
  list-style: none;
`

export const GenerateButton = styled.button`
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  height: 40px;
  width: 80px;
  border: 2px solid transparent;
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  margin: 5px;
  transition: opacity 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    border-color: #4a90e2; /* Highlight border on hover */
  }

  &:focus {
    outline: none;
    border-color: #2563eb; /* More visible border on focus */
  }
`
