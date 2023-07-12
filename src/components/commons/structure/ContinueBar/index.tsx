import React from 'react'
import { Container } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button } from '@components/buttons/Button'

interface Props {
  onPress: () => void
}

export const ContinueBar: React.FC<Props> = ({ onPress }) => {
  const insets = useSafeAreaInsets()

  return (
    <Container marginBottom={insets.bottom}>
      <Button value="Continuar" onPress={onPress}></Button>
    </Container>
  )
}
