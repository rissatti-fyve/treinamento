import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
`

export const ContainerTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 361px;
  height: 19px;
`
export const ContainerBody = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 12px;
  height: 83%;
  width: 100%;
`

export const ListProducts = styled.FlatList``
export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 72px;
  justify-content: space-between;
  padding: 16px;
  gap: 16px;

  border-bottom-color: #eaeaea;
  border-bottom-width: 1px;
`
export const ContainerLoading = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
