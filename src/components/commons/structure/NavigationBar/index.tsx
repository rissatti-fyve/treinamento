// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Icon } from '@components/toolkit/Icon'
import { ProductListSVG } from '@assets/icons/tabBar/ProductList'
import { OrdersSVG } from '@assets/icons/tabBar/Orders'

export const NavigationBar: React.FC = () => {
  return (
    <Container>
      <Icon icon={<ProductListSVG />} subtitle="Listagem"></Icon>
      <Icon icon={<OrdersSVG />} subtitle="Pedidos"></Icon>
    </Container>
  )
}
