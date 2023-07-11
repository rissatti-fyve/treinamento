import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: black;
  border-radius: 4px 4px 0px 0px;
  height: 7%;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  position: absolute;
  top: 709px;
`

export const ContainerQuantity = styled.View`
  border-radius: 40px;
  background-color: white;
  width: 15px;
  height: 14px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 5px;
  bottom: 4px;
`
export const ContainerCart = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`
export const ContainerVizualizeCart = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`
