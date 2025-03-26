import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`

export const LeftContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
`

export const Heading = styled.h1`
  font-size: 35px;
  color: #35469c;
  text-align: center;
`

export const FormContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 8px;
  background-color: transparent;
  border: 2px solid #5a7184;
  border-radius: 5px;
  color: #333;
`

export const Select = styled.select`
  height: 40px;
  width: 100%;
  padding: 8px;
  background-color: transparent;
  border: 2px solid #5a7184;
  border-radius: 5px;
  color: #333;
`

export const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0657d9;
  }
`

export const RightContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: ${props =>
    props.imageUrl ? `url(${props.imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px;
  color: white;
`

export const Paragraph = styled.p`
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
  text-align: center;
  color: white;
  white-space: pre-wrap; /* Ensures text is not broken */
`
