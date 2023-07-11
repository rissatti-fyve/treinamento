import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  margin-bottom: 12px;
`

export const ContainerIconTrashCan = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  width: 30px;
  height: 30px;
  border: 1px solid #eaeaea;
  padding: 6px;
`
export const ContainerNamePrice = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
export const ContainerPrice = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`
export const ContainerText = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 70%;
`
export const ContainerButtons = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`
