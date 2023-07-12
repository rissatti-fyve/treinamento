import API from '@services/api'
import { HttpgetProductInCartResponse, IResponse } from './types'
import { IProductCartFront } from '@services/types/IProductCartFront'

export async function getProductInCart(idUser: string): Promise<IResponse> {
  const response = await API.get<HttpgetProductInCartResponse>(
    `/cart?id_user=${idUser}`
  )

  const cartProducts: IProductCartFront[] = response.data.map(item => {
    return {
      idProduct: item.id_product,
      size: item.size,
      quantity: item.qtd_product,
      image: item.image,
      date_expiration: item.date_expiration,
      category: item.category,
      amount: item.amount,
      idUser: item.id_user,
      actived: item.actived,
      name: item.name
    }
  })
  return { products: cartProducts }
}
