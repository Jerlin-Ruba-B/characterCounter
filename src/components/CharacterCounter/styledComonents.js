import styled from 'styled-components'

export const CounterContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CounterBgContainer = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 124px;
`
export const CounterHeaderContainer = styled.div`
  background-color: #ffbf1f;
  padding: 12px;
`
export const InputHeaderContainer = styled(CounterHeaderContainer)`
  background-color: #0f172a;
  text-align: center;
`

export const Title = styled.h1`
  color: #0f172a;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
  margin: 12px;
`
export const InputTitle = styled(Title)`
  color: #ffc533;
`

export const ResultContainer = styled(CounterHeaderContainer)`
  background-color: #ffc533;
  display: flex;

  height: 225px;
`
export const InputResultContainer = styled.form`
  background-color: #1e293b;
  display: flex;
  height: 225px;
  padding: 12px;
`

export const LogoImage = styled.img`
  width: 240px;
  height: 200px;
`
export const InputEl = styled.input`
  border-width: 0px;
  background-color: #ffffff;
  color: #475569;
  font-family: 'Roboto';
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-left: 12px;
  height: 40px;
`
export const AddButton = styled.button`
  background-color: #ffbf1f;
  color: #1e293b;
  border-width: 0px;
  padding: 8px;
  border-radius: 4px;
  height: 40px;
`
export const Result = styled.p`
  color: #272c47;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
`
export const ListItem = styled.li`
  list-style-type: none;
`

export const UnorderedList = styled.ul`
  padding: 12px;
`
