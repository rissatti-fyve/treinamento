// External Libraries
import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState
} from 'react'

// Types
import { ICartContextData } from './types'
import { IProduct } from '@services/types/IProduct'

const CartContext = createContext<ICartContextData>({} as ICartContextData)

const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [listProducts, setListProducts] = useState<IProduct[]>([])

  async function addProduct(product: IProduct, quantity: number) {
    const productIndex = listProducts.findIndex(p => p.id === product.id)

    if (productIndex !== -1) {
      const updatedProducts = [...listProducts]
      updatedProducts[productIndex].quantity += quantity
      setListProducts(updatedProducts)
    } else {
      product.quantity = quantity
      setListProducts([...listProducts, product])
    }
  }

  async function updateQuantity(product: IProduct, quantity: number) {
    const updatedProducts = [...listProducts]
    const productIndex = updatedProducts.findIndex(p => p.id === product.id)

    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      quantity
    }

    setListProducts(updatedProducts)
  }

  async function deleteProduct(productId: number) {
    const updatedProducts = listProducts.filter(
      product => product.id !== productId
    )
    setListProducts(updatedProducts)
  }

  async function deleteAllProducts() {
    setListProducts([])
  }

  function returnProduct(idProduct: number) {
    const productIndex = listProducts.findIndex(p => p.id === idProduct)

    return listProducts[productIndex]
  }

  function sumTotalPrice(): number {
    let totalPrice = 0
    listProducts.forEach(product => {
      totalPrice = totalPrice + product.price * product.quantity
    })
    return totalPrice
  }
  function sumTotalQuantity(): number {
    let totalQuantity = 0
    listProducts.forEach(product => {
      totalQuantity = totalQuantity + product.quantity
    })
    return totalQuantity
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        listProducts,
        sumTotalPrice,
        sumTotalQuantity,
        deleteAllProducts,
        deleteProduct,
        updateQuantity,
        returnProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCartContext(): ICartContextData {
  const context = useContext(CartContext)

  if (!Object.keys(context)?.length) {
    throw new Error('useCartContext must be within a ContextProvider')
  }

  return context
}

export { CartContextProvider, useCartContext }
