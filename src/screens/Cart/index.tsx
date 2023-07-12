import React, { useState } from 'react'
import { Container, ContainerCartProducts } from './styles'
import { CartHeader } from '@screens/Cart/components/CartHeader'
import { LoadingBar } from '@components/toolkit/LoadingBar'
import { ContinueBar } from '@components/structure/ContinueBar'
import { Form } from '@screens/Cart/components/Form'
import { SucessStep } from './steps/SucessStep'
import { CartStep } from './steps/CartStep'
import { FreightStep } from './steps/FreightStep'

export const Cart: React.FC = navigation => {
  const [loadingVar, setLoadingVar] = useState(1)

  function handleContinue() {
    if (loadingVar < 3) {
      setLoadingVar(loadingVar + 1)
    }
  }
  return (
    <Container>
      {loadingVar === 1 ? <CartHeader titulo="Carrinho" botao="Limpar" /> : ''}
      {loadingVar === 2 ? <CartHeader titulo="Endereço" /> : ''}
      {loadingVar === 3 ? <CartHeader titulo="Concluído" /> : ''}
      <LoadingBar numberOfSteps={3} currentStep={loadingVar} />
      <ContainerCartProducts>
        {loadingVar === 1 ? <CartStep /> : ''}
        {loadingVar === 2 ? <FreightStep /> : ''}
        {loadingVar === 3 ? <SucessStep /> : ''}
      </ContainerCartProducts>
      <ContinueBar value={loadingVar} onPress={handleContinue} />
    </Container>
  )
}
