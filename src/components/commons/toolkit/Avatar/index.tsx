import React from 'react'

import { Container, CustomText } from './styles'

interface Props {
  name: string
}

export const Avatar: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <CustomText>{name?.[0]?.toUpperCase()}</CustomText>
    </Container>
  )
}
