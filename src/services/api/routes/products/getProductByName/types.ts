import { IProduct } from '@services/types/IProduct'

interface HttpGetProductByName {
  id_product: number
  images: {
    principal: string
    others: string[]
  }
  qtd_estoque: number
  nome: string
  sizes: number[]
  price: number
  categoria: string
  description: string
}

export type HttpGetProductByNameResponse = HttpGetProductByName[]

export interface IResponse {
  products: IProduct[]
}
