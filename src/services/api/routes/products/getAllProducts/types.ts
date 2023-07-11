import { IProduct } from '@services/types/IProduct'

interface HttpGetAllProductsProduct {
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

export interface HttpGetAllProductsResponse {
  products: HttpGetAllProductsProduct[]
}

export interface IResponse {
  products: IProduct[]
}
