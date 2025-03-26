import {List, GenerateButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, isActive} = props
  const {value, displayText} = details

  const onClickDirection = () => {
    changeDirection(value)
  }

  return (
    <List>
      <GenerateButton
        isActive={isActive}
        type="button"
        onClick={onClickDirection}
      >
        {displayText}
      </GenerateButton>
    </List>
  )
}

export default GradientDirectionItem
