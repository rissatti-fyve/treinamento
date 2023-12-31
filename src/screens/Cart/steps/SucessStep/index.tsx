// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Icon } from '@components/toolkit/Icon'
import { SucessSVG } from '@assets/icons/orderCompleted/Sucess'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'

export const SucessStep: React.FC = () => {
  return (
    <Container>
      <Icon icon={<SucessSVG />}></Icon>
      <Typography variant="s1">Pedido finalizado com sucesso</Typography>
      <Typography variant="b2" color={theme.colors.grey} align="center">
        Para acompanhar os seus pedidos basta acessar o menu pedidos dentro do
        aplicativo
      </Typography>
    </Container>
  )
}
