export interface IProduct {
  id: number
  category: string
  name: string
  price: number
  descont?: number
  url: string
  images: string[]
  desc: string
  sizes: number[]
  selectSize?: number | null
  storage: number
}
