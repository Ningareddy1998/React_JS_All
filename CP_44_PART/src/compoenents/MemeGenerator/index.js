import {Component} from 'react'
import {
  BackgroundContainer,
  Heading,
  FormContainer,
  LeftContainer,
  RightContainer,
  Paragraph,
  Input,
  Select,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {optionId: '8', displayText: '8'},
  {optionId: '12', displayText: '12'},
  {optionId: '16', displayText: '16'},
  {optionId: '20', displayText: '20'},
  {optionId: '24', displayText: '24'},
  {optionId: '28', displayText: '28'},
  {optionId: '32', displayText: '32'},
]

class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topInput: '',
    bottomInput: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isSubmit: false,
    memeData: null,
  }

  onImageInput = event => this.setState({imageInput: event.target.value})

  onTopInput = event => this.setState({topInput: event.target.value})

  onBottomInput = event => this.setState({bottomInput: event.target.value})

  onChangeFontSize = event => this.setState({fontSize: event.target.value})

  onSubmitForm = event => {
    event.preventDefault()
    const {imageInput, topInput, bottomInput} = this.state

    if (
      imageInput.trim() === '' ||
      topInput.trim() === '' ||
      bottomInput.trim() === ''
    ) {
      return // Prevent form submission if any input is empty
    }

    this.setState({
      memeData: {
        imageUrl: imageInput,
        topMemeText: topInput,
        bottomMemeText: bottomInput,
      },
      isSubmit: true,
    })
  }

  render() {
    const {
      imageInput,
      topInput,
      bottomInput,
      fontSize,
      isSubmit,
      memeData, // Destructuring state variables for easy access
    } = this.state

    return (
      <BackgroundContainer>
        <LeftContainer>
          <Heading>Meme Generator</Heading>
          <FormContainer onSubmit={this.onSubmitForm}>
            <label htmlFor="imageUrl">Image URL</label>
            <Input
              id="imageUrl"
              placeholder="Enter Image URL"
              type="text"
              value={imageInput}
              onChange={this.onImageInput}
            />

            <label htmlFor="top-text">Top Text</label>
            <Input
              placeholder="Enter Top Text"
              id="top-text"
              type="text"
              value={topInput}
              onChange={this.onTopInput}
            />

            <label htmlFor="bottom-text">Bottom Text</label>
            <Input
              placeholder="Enter Bottom Text"
              id="bottom-text"
              type="text"
              value={bottomInput}
              onChange={this.onBottomInput}
            />

            <label htmlFor="fontSize">Font Size</label>
            <br />
            <Select
              id="fontSize"
              value={fontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachList => (
                <option key={eachList.optionId} value={eachList.optionId}>
                  {eachList.displayText}
                </option>
              ))}
            </Select>

            <Button type="submit">Generate</Button>
          </FormContainer>
        </LeftContainer>

        {isSubmit && memeData && (
          <RightContainer
            data-testid="meme"
            imageUrl={memeData.imageUrl}
            isSubmit={isSubmit}
          >
            <Paragraph fontSize={fontSize}>{memeData.topMemeText}</Paragraph>
            <Paragraph fontSize={fontSize}>{memeData.bottomMemeText}</Paragraph>
          </RightContainer>
        )}
      </BackgroundContainer>
    )
  }
}

export default MemeGenerator
