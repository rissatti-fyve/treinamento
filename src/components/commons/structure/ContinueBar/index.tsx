import React from 'react'
import { ButtonContinue, Container } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'

interface Props {
  value: number
  onPress: () => void
}

export const ContinueBar: React.FC<Props> = ({ value, onPress }) => {
  const insets = useSafeAreaInsets()
  return (
    <Container marginBottom={insets.bottom}>
      <ButtonContinue
        onPress={() => {
          onPress()
        }}
      >
        <Typography variant="s2" color={theme.colors.white}>
          Continuar
        </Typography>
      </ButtonContinue>
    </Container>
  )
}
