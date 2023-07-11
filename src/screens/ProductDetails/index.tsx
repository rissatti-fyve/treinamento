import React from 'react'
import { Container } from './styles'
import { CardProductDetails } from '@components/structure/Cards/CardProductDetails'
import { ImagesCarrosel } from '@components/toolkit/ImagesCarrosel'
import { BuyingBar } from '@components/structure/BuyingBar'
import { useRoute } from '@react-navigation/native'
import { ProductDetailsRouteProp } from '@routes/types/routeProps'
import { BackButton } from '@components/toolkit/BackButton'
import { ScrollView } from 'react-native-gesture-handler'

export const ProductDetails: React.FC = navigation => {
  const { params } = useRoute<ProductDetailsRouteProp>()

  return (
    <Container>
      <ImagesCarrosel product={params.product}></ImagesCarrosel>
      <BackButton></BackButton>
      <ScrollView>
        <CardProductDetails product={params.product}></CardProductDetails>
      </ScrollView>
      <BuyingBar product={params.product}></BuyingBar>
    </Container>
  )
}
