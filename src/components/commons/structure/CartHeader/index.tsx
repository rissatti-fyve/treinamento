// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Icon } from '@components/toolkit/Icon'
import { Typography } from '@components/toolkit/Typography'
import { BackSVG } from '@assets/icons/cartHeader/Back'
import theme from '@global/theme'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProps } from '@routes/types/navigationProps'
import { useCartContext } from '@contexts/useCartContext'

interface Props {
  titulo: string
  botao?: string
}

export const CartHeader: React.FC<Props> = ({ titulo, botao }) => {
  const navigation = useNavigation<NavigationProps>()
  const cartContext = useCartContext()
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon icon={<BackSVG></BackSVG>}></Icon>
      </TouchableOpacity>
      <Typography variant="s2">{titulo}</Typography>
      <TouchableOpacity
        onPress={() => {
          cartContext.deleteAllProducts()
        }}
      >
        <Typography variant="s4" color={theme.colors.grey}>
          {botao}
        </Typography>
      </TouchableOpacity>
    </Container>
  )
}
