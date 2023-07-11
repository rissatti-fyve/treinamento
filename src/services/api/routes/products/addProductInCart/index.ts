import API from '@services/api'
import { IProductCart } from '@services/types/IProductCart'
import { IProductCardBackEnd } from './types'

export async function addProductInCart(product: IProductCart) {
  const cartBackend = convertFrontEndCartToBackEnd(product)
  const response = await API.post('/cart?', undefined, { params: cartBackend })
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
