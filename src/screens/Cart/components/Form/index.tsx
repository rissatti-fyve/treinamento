import React, { useState } from 'react'
import { Container, ContainerLinha } from './styles'
import { Input } from '../../../../components/commons/inputs/Input'
import { getAddressByCep } from '@services/api/routes/address/getAddressByCep'

export const Form: React.FC = () => {
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [numero, setNumero] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [complement, setComplement] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  async function handleBuscarEndereco(cep: string) {
    console.log(cep)

    const response = await getAddressByCep(cep)

    setNeighborhood(response.address.neighborhood)
    setStreet(response.address.street)
    setCity(response.address.city)
    setState(response.address.state)
  }

  const handleCep = () => {
    if (cep.length === 8) {
      handleBuscarEndereco(cep)
    }
  }

  return (
    <Container>
      <Input
        label={'CEP'}
        placeholder={'CEP'}
        value={cep}
        flex={1}
        onChange={setCep}
        onSubmitEditing={handleCep}
      />
      <ContainerLinha>
        <Input
          label={'Logradouro'}
          placeholder={'Logradouro'}
          value={street}
          flex={2}
          onChange={setStreet}
        ></Input>
        <Input
          label={'Número'}
          placeholder={'Número'}
          value={numero}
          flex={1}
          onChange={setNumero}
        ></Input>
      </ContainerLinha>
      <Input
        label={'Bairro'}
        placeholder={'Bairro'}
        value={neighborhood}
        flex={1}
        onChange={setNeighborhood}
      ></Input>
      <Input
        label={'Complemento'}
        placeholder={'Complemento'}
        value={complement}
        flex={1}
        onChange={setComplement}
      ></Input>
      <ContainerLinha>
        <Input
          label={'Cidade'}
          placeholder={'Cidade'}
          value={city}
          flex={2}
          onChange={setCity}
        ></Input>
        <Input
          label={'Estado'}
          placeholder={'Estado'}
          value={state}
          flex={1}
          onChange={setState}
        ></Input>
      </ContainerLinha>
    </Container>
  )
}
