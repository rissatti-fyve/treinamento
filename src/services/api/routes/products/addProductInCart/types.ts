export interface IResponse {
  resposta: string
}

export type IProductCardBackEnd = {
  id_user: string
  id_product: number
  qtd_product: number
  action: string
  size: number | null | undefined
}
