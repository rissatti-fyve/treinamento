import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-top: 8px;
`

export const SizeBlock = styled.TouchableOpacity`
  display: flex;
  gap: 10px;
  border: solid 1px #eaeaea;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 41px;
  margin-top: 8px;
  border-radius: 4px;

  ${(props: { isSelected: any }) =>
    props.isSelected &&
    css`
      border: 1px solid black;
    `}
`
export const ContainerSizes = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
