import API from '@services/api'
import {
  HttpGetAddressByCep,
  HttpGetAddressByCepResponse,
  IResponse
} from './types'

export async function getAddressByCep(cep: string): Promise<IResponse> {
  const response = await API.get<HttpGetAddressByCepResponse>(
    `/-cep?cep=${cep}`
  )

  const addressSearched: HttpGetAddressByCep = response.data

  return { address: addressSearched }
}
