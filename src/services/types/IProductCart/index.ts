export interface IProductCart {
  idUser: string
  idProduct: number
  quantity: number
  selectedSize: number | null | undefined
  action: string
}
