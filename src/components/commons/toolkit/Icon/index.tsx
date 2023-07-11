// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '../Typography'

interface Props {
  icon: JSX.Element
  subtitle?: string
}

export const Icon: React.FC<Props> = ({ icon, subtitle }) => {
  return (
    <Container>
      {icon}
      {subtitle ? <Typography variant="b4">{subtitle}</Typography> : null}
    </Container>
  )
}
