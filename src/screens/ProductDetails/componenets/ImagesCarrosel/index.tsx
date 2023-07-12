import React, { useState } from 'react'
import { Container, ImageCarrosel } from './styles'
import { Image, ListRenderItemInfo } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IProduct } from '@services/types/IProduct'

interface Props {
  product: IProduct
}

export const ImagesCarrosel: React.FC<Props> = ({ product }) => {
  const [image, setImage] = useState(product.url)

  function handleImagePress(item: any) {
    setImage(item)
  }

  function renderItem({ item }: ListRenderItemInfo<string>) {
    return (
      <TouchableOpacity onPress={() => handleImagePress(item)}>
        <Image
          source={{ uri: item }}
          style={{ height: 49, width: 71, marginLeft: 10, borderRadius: 4 }}
        />
      </TouchableOpacity>
    )
  }

  function keyExtractor(item: string) {
    return item
  }
  return (
    <Container>
      <Image
        source={{
          uri: image
        }}
        style={{ height: 270, width: 393, borderRadius: 4 }}
      />
      <ImageCarrosel
        data={product.images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  )
}
