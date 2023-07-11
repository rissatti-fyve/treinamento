import React, { useState } from 'react'
import {
  Container,
  ContainerButtons,
  ContainerIconTrashCan,
  ContainerNamePrice,
  ContainerPrice,
  ContainerText
} from './styles'
import { Image } from 'react-native'
import { Typography } from '@components/toolkit/Typography'
import { IProduct } from '@services/types/IProduct'
import theme from '@global/theme'
import { Icon } from '@components/toolkit/Icon'
import { TrashCanSVG } from '@assets/icons/cardProductInCart/TrashCan'
import { ButtonSelectAmount } from '@components/buttons/ButtonSelectAmount'
import { useCartContext } from '@contexts/useCartContext'

interface Props {
  product: IProduct
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

  return (
    <Container>
      <Image
        source={{
          uri: product.url
        }}
        style={{ height: 108, width: 97, borderRadius: 4 }}
      />
      <ContainerText>
        <ContainerNamePrice>
          <Typography variant="s2">{product.name}</Typography>
          <ContainerPrice>
            <Typography variant="s3" color={theme.colors.green}>
              R$ {product.price}
            </Typography>
            <Typography
              variant="s3"
              color={theme.colors.lighGrey}
              textDecorationLine="line-through"
            >
              {product.descont ? 'R$ ' + product.descont : ''}
            </Typography>
          </ContainerPrice>
        </ContainerNamePrice>
        <ContainerButtons>
          <ButtonSelectAmount
            value={quantity}
            onChange={handleQuantity}
          ></ButtonSelectAmount>
          <ContainerIconTrashCan
            onPress={() => {
              cartContext.deleteProduct(product.id)
            }}
          >
            <Icon icon={<TrashCanSVG></TrashCanSVG>}></Icon>
          </ContainerIconTrashCan>
        </ContainerButtons>
      </ContainerText>
    </Container>
  )
}
