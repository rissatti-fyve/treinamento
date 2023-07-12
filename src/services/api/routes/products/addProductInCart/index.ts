import API from '@services/api'
import { IProductCart } from '@services/types/IProductCart'
import {
  HttpAddProductInCartResponse,
  IProductCardBackEnd,
  IResponse
} from './types'
import { IProductCartFront } from '@services/types/IProductCartFront'

export async function addProductInCart(
  product: IProductCart
): Promise<IResponse> {
  const cartBackend = convertFrontEndCartToBackEnd(product)
  console.log(product)

  const response = await API.post<HttpAddProductInCartResponse>(
    '/cart?',
    undefined,
    { params: cartBackend }
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

function convertFrontEndCartToBackEnd(product: IProductCart) {
  const cartBackend: IProductCardBackEnd = {
    id_user: product.idUser,
    id_product: product.idProduct,
    qtd_product: product.quantity,
    action: product.action,
    size: product.selectedSize
  }
  return cartBackend
}
