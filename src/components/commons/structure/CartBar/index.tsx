import React from 'react'
import {
  Container,
  ContainerCart,
  ContainerQuantity,
  ContainerVizualizeCart
} from './styles'
import { Icon } from '@components/toolkit/Icon'
import { CartSVG } from '@assets/icons/CartBar/Cart'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { useCartContext } from '@contexts/useCartContext'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@routes/types/navigationProps'

export const CartBar: React.FC = () => {
  const cartContext = useCartContext()
  const navigation = useNavigation<NavigationProps>()

  function handleNavigationPress() {
    navigation.navigate('Cart')
  }

  return (
    <Container onPress={handleNavigationPress}>
      <ContainerVizualizeCart>
        <ContainerCart>
          <Icon icon={<CartSVG />}></Icon>
          <ContainerQuantity>
            <Typography variant="b4" color={theme.colors.black}>
              {cartContext.sumTotalQuantity()}
            </Typography>
          </ContainerQuantity>
        </ContainerCart>
        <Typography variant="s2" color={theme.colors.white}>
          Vizualizar carrinho
        </Typography>
      </ContainerVizualizeCart>
      <Typography variant="s2" color={theme.colors.white}>
        R$ {cartContext.sumTotalPrice().toFixed(2)}
      </Typography>
    </Container>
  )
}
