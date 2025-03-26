import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  BgContainer,
  TopContainer,
  UnList,
  BottomContainer,
  InputColor,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'to top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'to bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'to right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'to left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
    dataBg: {
      color1: '#8ae323',
      color2: '#014f7b',
      bgDirection: gradientDirectionsList[0].value,
    },
  }

  onInput1 = event => {
    this.setState({inputColor1: event.target.value})
  }

  onInput2 = event => {
    this.setState({inputColor2: event.target.value})
  }

  changeDirection = direction => {
    this.setState({gradientDirection: direction})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {inputColor1, inputColor2, gradientDirection} = this.state
    this.setState({
      dataBg: {
        color1: inputColor1,
        color2: inputColor2,
        bgDirection: gradientDirection,
      },
    })
  }

  render() {
    const {inputColor1, inputColor2, gradientDirection, dataBg} = this.state
    const {color1, color2, bgDirection} = dataBg

    return (
      <BgContainer
        bgColor={`${bgDirection}, ${color1}, ${color2}`}
        data-testid="gradientGenerator"
      >
        <form onSubmit={this.onSubmitForm}>
          <TopContainer>
            <h1>Generate a CSS Color Gradient</h1>
            <p>Choose Direction</p>
          </TopContainer>
          <UnList>
            {gradientDirectionsList.map(eachList => (
              <GradientDirectionItem
                key={eachList.directionId}
                details={eachList}
                changeDirection={this.changeDirection}
                isActive={gradientDirection === eachList.value}
              />
            ))}
          </UnList>
          <p>Pick the Colors</p>
          <BottomContainer>
            <div>
              <p>{inputColor1}</p>
              <InputColor
                type="color"
                value={inputColor1}
                onChange={this.onInput1}
              />
            </div>
            <div>
              <p>{inputColor2}</p>
              <InputColor
                type="color"
                value={inputColor2}
                onChange={this.onInput2}
              />
            </div>
          </BottomContainer>
          <Button type="submit">Generate</Button>
        </form>
      </BgContainer>
    )
  }
}

export default GradientGenerator
