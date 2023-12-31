import { IProductCartFront } from '@services/types/IProductCartFront'

interface HttpAddProductInCart {
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

export type HttpAddProductInCartResponse = HttpAddProductInCart[]

export type IProductCardBackEnd = {
  id_user: string
  id_product: number
  qtd_product: number
  action: string
  size: number | null | undefined
}
export interface IResponse {
  products: IProductCartFront[]
}
