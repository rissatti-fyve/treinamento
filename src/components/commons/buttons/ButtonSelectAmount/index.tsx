import React from 'react'
import { Container } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '@components/toolkit/Icon'
import { Typography } from '@components/toolkit/Typography'
import { AddSVG } from '@assets/icons/buyingBar/Add'
import { MinusSVG } from '@assets/icons/buyingBar/Minus'

interface Props {
  value: number
  onChange: (type: 'add' | 'remove') => void
}

export const ButtonSelectAmount: React.FC<Props> = ({ onChange, value }) => {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          onChange('remove')
        }}
      >
        <Icon icon={<MinusSVG></MinusSVG>}></Icon>
      </TouchableOpacity>

      <Typography variant="s2">{value}</Typography>

      <TouchableOpacity
        onPress={() => {
          onChange('add')
        }}
      >
        <Icon icon={<AddSVG></AddSVG>}></Icon>
      </TouchableOpacity>
    </Container>
  )
}
