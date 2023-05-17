import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import {
  CounterContainer,
  CounterBgContainer,
  CounterHeaderContainer,
  Title,
  ResultContainer,
  LogoImage,
  InputHeaderContainer,
  InputTitle,
  InputResultContainer,
  InputEl,
  AddButton,
  Result,
  UnorderedList,
  ListItem,
} from './styledComonents'

class CharacterCounter extends Component {
  state = {textInput: '', changeActive: false, result: []}

  updateInput = event => {
    this.setState({textInput: event.target.value})
  }

  changeActive = event => {
    event.preventDefault()
    const {textInput} = this.state

    const newText = {
      id: uuidV4(),
      text: textInput,
    }

    this.setState(prevState => ({
      result: [...prevState.result, newText],
      changeActive: true,
      textInput: '',
    }))
  }

  render() {
    const {textInput, changeActive, result} = this.state

    return (
      <CounterContainer>
        <>
          <CounterBgContainer>
            <CounterHeaderContainer>
              <Title>Count the characters like a Boss...</Title>
            </CounterHeaderContainer>

            {changeActive ? (
              <ResultContainer>
                <UnorderedList>
                  {result.map(each => (
                    <ListItem key={each.id}>
                      <Result>{`${each.text}:${each.text.length}`}</Result>
                    </ListItem>
                  ))}
                </UnorderedList>
              </ResultContainer>
            ) : (
              <ResultContainer>
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
                  alt="no user inputs"
                />
              </ResultContainer>
            )}
          </CounterBgContainer>
          <CounterBgContainer>
            <InputHeaderContainer>
              <InputTitle>Character Counter</InputTitle>
            </InputHeaderContainer>
            <InputResultContainer onSubmit={this.changeActive}>
              <InputEl
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.updateInput}
                value={textInput}
              />
              <AddButton type="submit">Add</AddButton>
            </InputResultContainer>
          </CounterBgContainer>
        </>
      </CounterContainer>
    )
  }
}
export default CharacterCounter
