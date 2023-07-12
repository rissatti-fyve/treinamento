import React from 'react'

import theme from '@global/theme'
import { Typography } from '@components/toolkit/Typography'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@routes/types/navigationProps'
import { IProduct } from '@services/types/IProduct'
import {
  Container,
  ContainerName,
  ContainerPrice,
  ContainerText
} from './styles'

interface Props {
  product: IProduct
}

export const CardProduct: React.FC<Props> = ({ product }) => {
  const navigation = useNavigation<NavigationProps>()

  function handleNavigationPress() {
    navigation.navigate('ProductDetails', {
      product
    })
  }

  return (
    <Container onPress={handleNavigationPress}>
      <Image
        source={{
          uri: product.url
        }}
        style={{ height: 147, width: 175, borderRadius: 4 }}
      />
      <ContainerText>
        <Typography variant="b3" color={theme.colors.grey}>
          {product.category}
        </Typography>
        <ContainerName>
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
        </ContainerName>
      </ContainerText>
    </Container>
  )
}
