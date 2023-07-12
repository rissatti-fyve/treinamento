// External Libraries
import React, { useEffect, useState } from 'react'

// Components

// Styles
import { Container } from './styles'
import { ListProducts } from '@screens/Cart/styles'
import { IProductCartFront } from '@services/types/IProductCartFront'
import { ListRenderItemInfo } from 'react-native'
import { CardProductInCart } from '@components/structure/cards/CardProductInCart'
import { getProductInCart } from '@services/api/routes/products/getProdducInCart'

export const CartStep: React.FC = () => {
  const [data, setData] = useState<IProductCartFront[]>()
  function renderItem({ item }: ListRenderItemInfo<IProductCartFront>) {
    return <CardProductInCart product={item} />
  }

  function keyExtractor(item: IProductCartFront) {
    return item.idProduct
  }
  async function fetchProductsInCart() {
    const response = await getProductInCart('1')
    setData(response.products)
  }

  useEffect(() => {
    fetchProductsInCart()
  }, [])
  return (
    <Container>
      <ListProducts
        data={data}
        numColumns={1}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  )
}
