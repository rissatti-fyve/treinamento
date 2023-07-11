import API from '@services/api'
import { HttpGetProductByNameResponse, IResponse } from './types'
import { IProduct } from '@services/types/IProduct'

export async function getProductByName(searchTerm: string): Promise<IResponse> {
  const response = await API.get<HttpGetProductByNameResponse>(
    `/products/name?search=${searchTerm}`
  )

  const searchProducts: IProduct[] = response.data.map(item => {
    return {
      id: item.id_product,
      url: item.images.principal,
      images: item.images.others,
      storage: item.qtd_estoque,
      name: item.nome,
      sizes: item.sizes,
      price: item.price,
      category: item.categoria,
      desc: item.description
    }
  })

  return { products: searchProducts }
}
