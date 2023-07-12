import React from 'react'

import { Container, SearchInput } from './styles'
import { MagnifierSVG } from '@assets/icons/searchBar/Magnifier'

interface Props {
  value: string
  onSubmitEditing: () => Promise<void>
  onChange: (text: string) => void
}

export const SearchBar: React.FC<Props> = ({
  value,
  onSubmitEditing,
  onChange
}) => {
  return (
    <Container>
      <MagnifierSVG />
      <SearchInput
        placeholder="Pesquisar"
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmitEditing}
      ></SearchInput>
    </Container>
  )
}
