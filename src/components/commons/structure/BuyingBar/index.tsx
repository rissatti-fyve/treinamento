import React, { useState } from 'react'
import { Container, ContainerAddToCart } from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { IProduct } from '@services/types/IProduct'
import { useCartContext } from '@contexts/useCartContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ButtonSelectAmount } from '@components/buttons/ButtonSelectAmount'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@routes/types/navigationProps'
import { addProductInCart } from '@services/api/routes/products/addProductInCart'
import { IProductCart } from '@services/types/IProductCart'

interface Props {
  product: IProduct
}

export const BuyingBar: React.FC<Props> = ({ product }) => {
  const navigation = useNavigation<NavigationProps>()
  const cartContext = useCartContext()
  const [quantity, setQuantity] = useState(0)

  const productCart: IProductCart = {
    idUser: '1',
    idProduct: product.id,
    quantity,
    selectedSize: product.selectSize,
    action: 'add'
  }

  const handleAddToCart = async (count: number) => {
    cartContext.addProduct(product, count)
    addProductInCart(productCart)
    navigation.navigate('Home')
  }

  const insets = useSafeAreaInsets()

  function handleQUantity(type: 'add' | 'remove') {
    if (type === 'add') {
      setQuantity(quantity + 1)
    } else {
      if (quantity > 1) setQuantity(quantity - 1)
    }
  }

  return (
    <Container marginBottom={insets.bottom}>
      <ButtonSelectAmount
        value={quantity}
        onChange={handleQUantity}
      ></ButtonSelectAmount>
      <ContainerAddToCart
        onPress={() => {
          handleAddToCart(quantity)
        }}
      >
        <Typography variant="s2" color={theme.colors.white}>
          Adicionar
        </Typography>
        <Typography variant="s2" color={theme.colors.white}>
          R$ {(product.price * quantity).toFixed(2)}
        </Typography>
      </ContainerAddToCart>
    </Container>
  )
}
