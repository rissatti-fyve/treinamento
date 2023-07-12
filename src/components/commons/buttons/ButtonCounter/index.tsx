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

export const ButtonCounter: React.FC<Props> = ({ onChange, value }) => {
  function handleMinusPress() {
    onChange('remove')
  }
  function handleAddPress() {
    onChange('add')
  }
  return (
    <Container>
      <TouchableOpacity onPress={handleMinusPress}>
        <Icon icon={<MinusSVG></MinusSVG>} />
      </TouchableOpacity>

      <Typography variant="s2">{value}</Typography>

      <TouchableOpacity onPress={handleAddPress}>
        <Icon icon={<AddSVG></AddSVG>} />
      </TouchableOpacity>
    </Container>
  )
}
