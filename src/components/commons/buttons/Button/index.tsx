import React from 'react'
import { Typography } from '@components/toolkit/Typography'
import { ButtonContainer } from './styles'
import theme from '@global/theme'
interface Props {
  value: string
  onPress: () => void
}
export const Button: React.FC<Props> = ({ value, onPress }) => {
  return (
    <ButtonContainer
      onPress={() => {
        onPress()
      }}
    >
      <Typography variant="s2" color={theme.colors.white}>
        {value}
      </Typography>
    </ButtonContainer>
  )
}
