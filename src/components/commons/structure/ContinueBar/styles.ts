import styled from 'styled-components/native'
interface Props {
  marginBottom: number
}

export const Container = styled.View<Props>`
  display: flex;
  flex-direction: row;
  width: 393px;
  height: 70px;
  border-top-color: #eaeaea;
  border-top-width: 1px;
  justify-content: space-around;
  gap: 10px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
`
export const ButtonContinue = styled.TouchableOpacity`
  border-radius: 6px;
  width: 361px;
  justify-content: center;
  align-items: center;
  padding: 0px 12px 0px 12px;
  background-color: black;
`
