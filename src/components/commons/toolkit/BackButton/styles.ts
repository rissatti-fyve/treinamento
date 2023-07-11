import styled from 'styled-components/native'

interface Props {
  paddingTop: number
}

export const Container = styled.TouchableOpacity<Props>`
  border-radius: 40px;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  position: absolute;
  left: 20px;
  top: ${({ paddingTop }) => paddingTop}px;
`
