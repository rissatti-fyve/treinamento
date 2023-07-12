import { IProductCartFront } from '@services/types/IProductCartFront'

interface HttpGetProductInCart {
  id_product: number
  size: number
  qtd_product: number
  image: string
  date_expiration: string
  category: string
  amount: number
  id_user: number
  actived: boolean
  name: string
}

export type HttpgetProductInCartResponse = HttpGetProductInCart[]

export interface IResponse {
  products: IProductCartFront[]
}
