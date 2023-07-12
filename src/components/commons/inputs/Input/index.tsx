// External Libraries
import React from 'react'

// Components

// Styles
import { Container, TextInput } from './styles'
import { Typography } from '@components/toolkit/Typography'

interface Props {
  label: string
  placeholder: string
  value: string
  flex: number
  onChange: (text: string) => void
  onSubmitEditing?: (text: string) => void
}

export const Input: React.FC<Props> = ({
  label,
  placeholder,
  flex,
  value,
  onChange,
  onSubmitEditing
}) => {
  return (
    <Container flexNumber={flex}>
      <Typography variant="s3">{label}</Typography>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  )
}
