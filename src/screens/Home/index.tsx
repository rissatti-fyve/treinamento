// External Libraries
import React, { useEffect, useState } from 'react'

// Components

// Styles
import { Avatar } from '@components/toolkit/Avatar'
import {
  Container,
  ContainerBody,
  ContainerHeader,
  ContainerLoading,
  ContainerTitle,
  ListProducts
} from './styles'
import { CardProduct } from '@components/structure/Cards/CardProduct'
import { NavigationBar } from '@components/structure/NavigationBar'
import { Typography } from '@components/toolkit/Typography'
import { SearchBar } from '@components/inputs/SearchBar'
import { ActivityIndicator, ListRenderItemInfo } from 'react-native'
import { IProduct } from '@services/types/IProduct'
import { CartBar } from '@components/structure/CartBar'
import { useCartContext } from '@contexts/useCartContext'
import { getAllProducts } from '@services/api/routes/products/getAllProducts'
import { getProductByName } from '@services/api/routes/products/getProductByName'

export const Home: React.FC = navigation => {
  const cartContext = useCartContext()
  const [data, setData] = useState<IProduct[]>([])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetachAllProducts() {
    const response = await getAllProducts()
    setData(response.products)
  }

  function renderItem({ item }: ListRenderItemInfo<IProduct>) {
    return <CardProduct product={item} />
  }

  function keyExtractor(item: IProduct) {
    return item.id
  }

  async function handleSearch(search: string) {
    setData([])
    setIsLoading(true)
    if (search.trim() === '') {
      fetachAllProducts()
      setIsLoading(false)
      return
    }
    const searchTratament = search.toLowerCase()
    const response = await getProductByName(searchTratament)
    setIsLoading(false)
    setData(response.products)
  }

  useEffect(() => {
    fetachAllProducts()
  }, [])
  return (
    <Container>
      <ContainerHeader>
        <SearchBar
          value={inputText}
          onSubmitEditing={() => handleSearch(inputText)}
          onChange={setInputText}
        />
        <Avatar name="noah" />
      </ContainerHeader>

      <ContainerBody>
        <ContainerTitle>
          <Typography variant="s1">Todos os Produtos</Typography>
          <Typography variant="b3">Vizualizar todos</Typography>
        </ContainerTitle>

        {isLoading ? (
          <ContainerLoading>
            <ActivityIndicator size="large" />
          </ContainerLoading>
        ) : null}
        <ListProducts
          data={data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </ContainerBody>

      {cartContext.sumTotalQuantity() > 0 ? <CartBar></CartBar> : ''}
      <NavigationBar></NavigationBar>
    </Container>
  )
}
