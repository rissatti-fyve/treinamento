// External Libraries
import React, { useState } from 'react'
import { ContainerSizes, SizeBlock } from './styles'
import { IProduct } from '@services/types/IProduct'
import { Text } from 'react-native'

interface Props {
  product: IProduct
}
interface ShoeSize {
  id: number
  size: number
}

export const SizeCarrosel: React.FC<Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<ShoeSize | null>(null)

  // Função para selecionar um tamanho de tênis da lista
  const selectSize = (size: ShoeSize) => {
    product.selectSize = size.size
    setSelectedSize(size)
  }

  // Renderiza a lista de tamanhos de tênis
  const renderSizes = () => {
    const shoeSizes: ShoeSize[] = product.sizes.map((number, index) => ({
      id: index,
      size: number
    }))
    const sizes = shoeSizes

    return sizes.map(size => (
      <SizeBlock key={size.id} onPress={() => selectSize(size)}>
        <Text
          style={{
            color:
              selectedSize && selectedSize.id === size.id ? 'black' : 'grey'
          }}
        >
          {size.size}
        </Text>
      </SizeBlock>
    ))
  }

  return <ContainerSizes>{renderSizes()}</ContainerSizes>
}
