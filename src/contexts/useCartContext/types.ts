import { IProductCartFront } from '@services/types/IProductCartFront'

export interface ICartContextData {
  fetchProductsInCart: () => void
  addProduct: (produto: IProductCartFront, quantity: number) => Promise<void>
  updateQuantity: (
    product: IProductCartFront,
    quantity: number
  ) => Promise<void>
  deleteProduct: (productId: number) => Promise<void>
  deleteAllProducts: () => Promise<void>
  returnProduct: (idProduct: number) => IProductCartFront
  sumTotalPrice: () => number
  sumTotalQuantity: () => number
  listProducts: IProductCartFront[]
}
