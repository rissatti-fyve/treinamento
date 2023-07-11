import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: ${(props: { flexNumber: number }) => props.flexNumber};
`
export const TextInput = styled.TextInput`
  border-width: 1px;
  border-color: #ebebeb;
  padding: 10px 12px 10px 12px;
  border-radius: 4px;
  font-size: 16px;
`
