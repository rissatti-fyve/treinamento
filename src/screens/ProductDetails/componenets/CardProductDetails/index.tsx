// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { SizeCarrosel } from '@screens/ProductDetails/componenets/SizeCarrosel'
import { IProduct } from '@services/types/IProduct'

interface Props {
  product: IProduct
}

export const CardProductDetails: React.FC<Props> = ({ product }) => {
  return (
    <Container>
      <Typography variant="b3" color={theme.colors.grey}>
        {product.category}
      </Typography>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="b2" color={theme.colors.grey}>
        {product.desc}
      </Typography>
      <SizeCarrosel product={product}></SizeCarrosel>
    </Container>
  )
}
