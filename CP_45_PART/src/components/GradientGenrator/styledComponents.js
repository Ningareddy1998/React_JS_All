import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(${props => props.bgColor});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const TopContainer = styled.div`
  background-color: transparent;
  text-align: center;
`

export const UnList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 0;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`

export const InputColor = styled.input`
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
`

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #45a049;
  }
`
