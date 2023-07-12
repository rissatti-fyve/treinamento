import React, { useState } from 'react'

import { Image } from 'react-native'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { Icon } from '@components/toolkit/Icon'
import { TrashCanSVG } from '@assets/icons/cardProductInCart/TrashCan'
import { ButtonCounter } from '@components/buttons/ButtonCounter'
import { useCartContext } from '@contexts/useCartContext'
import { IProductCartFront } from '@services/types/IProductCartFront'
import {
  Container,
  ContainerButtons,
  ContainerIconTrashCan,
  ContainerNamePrice,
  ContainerPrice,
  ContainerText
} from './styles'

interface Props {
  product: IProductCartFront
}

export const CardProductInCart: React.FC<Props> = ({ product }) => {
  const cartContext = useCartContext()
  const [quantity, setQuantity] = useState(product.quantity)

  function handleQuantity(type: 'add' | 'remove') {
    if (type === 'add') {
      setQuantity(quantity + 1)
      cartContext.updateQuantity(product, quantity)
    } else {
      if (quantity > 1) setQuantity(quantity - 1)
      cartContext.updateQuantity(product, quantity)
    }
  }

  function handleIconTrashPress() {
    cartContext.deleteProduct(product.idProduct)
  }

  return (
    <Container>
      <Image
        source={{
          uri: product.image
        }}
        style={{ height: 108, width: 97, borderRadius: 4 }}
      />
      <ContainerText>
        <ContainerNamePrice>
          <Typography variant="s2">{product.name}</Typography>
          <ContainerPrice>
            <Typography variant="s3" color={theme.colors.green}>
              R$ {product.amount}
            </Typography>
          </ContainerPrice>
        </ContainerNamePrice>
        <ContainerButtons>
          <ButtonCounter value={quantity} onChange={handleQuantity} />
          <ContainerIconTrashCan onPress={handleIconTrashPress}>
            <Icon icon={<TrashCanSVG />}></Icon>
          </ContainerIconTrashCan>
        </ContainerButtons>
      </ContainerText>
    </Container>
  )
}
