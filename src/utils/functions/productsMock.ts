import { IProduct } from '@services/types/IProduct'

export const PRODUCT_MOCK: IProduct[] = [
  {
    id: 'SP001',
    category: 'Sapatos',
    name: 'Tênis nike esporte',
    price: 699.99,
    descont: 1000.99,
    url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    desc: 'Isso com certeza é um tênis.',
    sizes: ['38', '39', '40', '41', '42'],
    quantity: 0
  },
  {
    id: 'SP002',
    category: 'Sapatos',
    name: 'Tênis nike esporte branco corrida',
    price: 1999.99,
    url: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    desc: 'O tênis branco da Nike, parte da nova linha, combina estilo e conforto. Seu design minimalista e elegante é perfeito para qualquer ocasião, enquanto a tecnologia avançada oferece um ajuste perfeito e amortecimento de alto desempenho.',
    sizes: ['38', '39', '40', '41'],
    quantity: 0
  },
  {
    id: 'SP003 ',
    category: 'Sapatos',
    name: 'Tênis nike esporte vermelho casual',
    price: 599.99,
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    desc: 'Esse tênis é da Nike, é vermelho, e deve ser confortável.',
    sizes: ['36', '38', '40'],
    quantity: 0
  }
]
