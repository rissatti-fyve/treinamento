import API from '@services/api'
import { HttpGetAllProductsResponse, IResponse } from './types'
import { IProduct } from '@services/types/IProduct'

export async function getAllProducts(): Promise<IResponse> {
  const response = await API.get<HttpGetAllProductsResponse>('/products')

  const updatedProducts: IProduct[] = response.data.products.map(item => {
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

  return { products: updatedProducts }
}
