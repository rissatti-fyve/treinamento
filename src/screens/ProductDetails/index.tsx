import React from 'react'
import { Container } from './styles'
import { CardProductDetails } from '@screens/ProductDetails/componenets/CardProductDetails'
import { ImagesCarrosel } from '@screens/ProductDetails/componenets/ImagesCarrosel'
import { BuyingBar } from '@screens/ProductDetails/componenets/BuyingBar'
import { useRoute } from '@react-navigation/native'
import { ProductDetailsRouteProp } from '@routes/types/routeProps'
import { BackButton } from '@components/toolkit/BackButton'
import { ScrollView } from 'react-native-gesture-handler'

export const ProductDetails: React.FC = navigation => {
  const { params } = useRoute<ProductDetailsRouteProp>()

  return (
    <Container>
      <ImagesCarrosel product={params.product} />
      <BackButton />
      <ScrollView>
        <CardProductDetails product={params.product} />
      </ScrollView>
      <BuyingBar product={params.product} />
    </Container>
  )
}
