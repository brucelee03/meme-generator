import {Component} from 'react'

import {
  HomeContainer,
  Heading,
  MemeGeneratorSection,
  MemeGeneratorForm,
  Label,
  InputElement,
  FontSizeSelection,
  MemeGeneratorButton,
  MemeContainer,
  MemeTaglines,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    urlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSize: fontSizesOptionsList[0].optionId,
    showGeneratedMeme: false,
  }

  onEnterImageUrl = event => {
    this.setState({urlInput: event.target.value})
  }

  onEnterTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onEnterBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activeFontSize: event.target.value})
  }

  onClickGenerateMeme = event => {
    event.preventDefault()
    this.setState({showGeneratedMeme: true})
  }

  render() {
    const {
      urlInput,
      topTextInput,
      bottomTextInput,
      activeFontSize,
      showGeneratedMeme,
    } = this.state
    return (
      <HomeContainer>
        <Heading>Meme Generator</Heading>
        <MemeGeneratorSection>
          <MemeGeneratorForm onSubmit={this.onClickGenerateMeme}>
            <Label htmlFor="image-url">Image URL</Label>
            <InputElement
              type="text"
              id="image-url"
              value={urlInput}
              onChange={this.onEnterImageUrl}
              placeholder="Enter the Image URL"
            />

            <Label htmlFor="top-text">Top Text</Label>
            <InputElement
              type="text"
              id="top-text"
              value={topTextInput}
              onChange={this.onEnterTopText}
              placeholder="Enter the Top Text"
            />

            <Label htmlFor="bottom-text">Bottom Text</Label>
            <InputElement
              type="text"
              id="bottom-text"
              value={bottomTextInput}
              onChange={this.onEnterBottomText}
              placeholder="Enter the Bottom Text"
            />

            <Label htmlFor="font-size">Font Size</Label>
            <FontSizeSelection
              id="font-size"
              value={activeFontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachFontSize => (
                <option
                  key={eachFontSize.optionId}
                  value={eachFontSize.optionId}
                >
                  {eachFontSize.displayText}
                </option>
              ))}
            </FontSizeSelection>

            <MemeGeneratorButton
              type="submit"
              onClick={this.onClickGenerateMeme}
            >
              Generate
            </MemeGeneratorButton>
          </MemeGeneratorForm>
          {showGeneratedMeme ? (
            <MemeContainer bgImage={`url(${urlInput})`} data-testid="meme">
              <MemeTaglines fontSize={`${activeFontSize}px`}>
                {topTextInput}
              </MemeTaglines>
              <MemeTaglines fontSize={`${activeFontSize}px`}>
                {bottomTextInput}
              </MemeTaglines>
            </MemeContainer>
          ) : null}
        </MemeGeneratorSection>
      </HomeContainer>
    )
  }
}

export default MemeGenerator
