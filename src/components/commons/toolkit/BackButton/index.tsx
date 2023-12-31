import React from 'react'
import { Container } from './styles'
import { BackButtonSVG } from '@assets/icons/backButton/BackButton'
import { NavigationProps } from '@routes/types/navigationProps'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const BackButton: React.FC = () => {
  const navigation = useNavigation<NavigationProps>()
  const insets = useSafeAreaInsets()

  function handleNavigationPress() {
    navigation.navigate('Home')
  }
  return (
    <Container paddingTop={insets.top} onPress={handleNavigationPress}>
      <BackButtonSVG />
    </Container>
  )
}
