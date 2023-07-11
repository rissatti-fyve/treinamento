import React, { useState } from 'react'
import { Container, ContainerCartProducts, ListProducts } from './styles'
import { CartHeader } from '@components/structure/CartHeader'
import { CardProductInCart } from '@components/structure/Cards/CardProductInCart'
import { ListRenderItemInfo } from 'react-native'
import { IProduct } from '@services/types/IProduct'
import { LoadingBar } from '@components/toolkit/LoadingBar'
import { ContinueBar } from '@components/structure/ContinueBar'
import { useCartContext } from '@contexts/useCartContext'
import { Form } from '@components/inputs/Form'
import { OrderCompleted } from '@components/structure/OrderCompleted'

export const Cart: React.FC = navigation => {
  const [loadingVar, setLoadingVar] = useState(1)
  const cartContext = useCartContext()

  function renderItem({ item }: ListRenderItemInfo<IProduct>) {
    return <CardProductInCart product={item} />
  }

  function keyExtractor(item: IProduct) {
    return item.id
  }
  function handleContinue() {
    if (loadingVar < 3) {
      setLoadingVar(loadingVar + 1)
    }
  }
  return (
    <Container>
      {loadingVar === 1 ? (
        <CartHeader titulo="Carrinho" botao="Limpar"></CartHeader>
      ) : (
        ''
      )}
      {loadingVar === 2 ? <CartHeader titulo="Endereço"></CartHeader> : ''}
      {loadingVar === 3 ? <CartHeader titulo="Concluído"></CartHeader> : ''}
      <LoadingBar numberOfSteps={3} currentStep={loadingVar}></LoadingBar>
      <ContainerCartProducts>
        {loadingVar === 1 ? (
          <ListProducts
            data={cartContext.listProducts}
            numColumns={1}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        ) : (
          ''
        )}
        {loadingVar === 2 ? <Form></Form> : ''}
        {loadingVar === 3 ? <OrderCompleted></OrderCompleted> : ''}
      </ContainerCartProducts>
      <ContinueBar value={loadingVar} onPress={handleContinue}></ContinueBar>
    </Container>
  )
}
