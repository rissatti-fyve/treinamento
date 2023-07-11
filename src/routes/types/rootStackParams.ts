import { IProduct } from '@services/types/IProduct'

export type RootStackParamList = {
  Home: undefined
  ProductDetails: {
    product: IProduct
  }
  Cart: undefined
}
