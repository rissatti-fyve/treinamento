import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 393px;
  height: 70px;
  border-top-color: #eaeaea;
  border-top-width: 1px;
  justify-content: space-around;
  gap: 10px;
  margin-bottom: ${(props: { marginBottom: any }) => props.marginBottom}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
`
export const ContainerSelectAmount = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
  gap: 10px;
  border: solid 1px #eaeaea;
  height: 44px;
`
export const ContainerAddToCart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
  gap: 10px;
  background-color: #000000;
  height: 44px;
  width: 70%;
`
