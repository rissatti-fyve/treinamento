import { IProduct } from '@services/types/IProduct'

export interface ICartContextData {
  addProduct: (produto: IProduct, quantity: number) => Promise<void>
  updateQuantity: (produto: IProduct, quantity: number) => Promise<void>
  deleteProduct: (productId: number) => Promise<void>
  deleteAllProducts: () => Promise<void>
  returnProduct: (idProduct: number) => IProduct
  sumTotalPrice: () => number
  sumTotalQuantity: () => number
  listProducts: IProduct[]
}
