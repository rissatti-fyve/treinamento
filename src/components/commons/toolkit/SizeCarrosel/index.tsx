// External Libraries
import React, { useState } from 'react'
import { Container, ContainerSizes, SizeBlock } from './styles'
import { Typography } from '../Typography'
import { IProduct } from '@services/types/IProduct'

interface Props {
  product: IProduct
}

export const SizeCarrosel: React.FC<Props> = ({ product }) => {
  const sizes = product.sizes
  const [selectedSize, setSelectedSize] = useState<number | null>(null)

  const handleSizeSelection = (size: number) => {
    setSelectedSize(prevSelectedSize =>
      prevSelectedSize === size ? null : size
    )
    product.selectSize = selectedSize
  }

  return (
    <Container>
      <Typography variant="h5">Tamanhos</Typography>
      <ContainerSizes>
        {sizes.map(size => (
          <SizeBlock
            key={size}
            isSelected={selectedSize === size}
            onPress={() => {
              handleSizeSelection(size)
            }}
          >
            <Typography variant="s2">{size}</Typography>
          </SizeBlock>
        ))}
      </ContainerSizes>
    </Container>
  )
}
