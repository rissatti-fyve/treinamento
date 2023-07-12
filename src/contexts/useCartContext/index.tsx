import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect
} from 'react'
import { ICartContextData } from './types'
import { IProductCartFront } from '@services/types/IProductCartFront'
import { getProductInCart } from '@services/api/routes/products/getProdducInCart'

const CartContext = createContext<ICartContextData>({} as ICartContextData)

const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [listProducts, setListProducts] = useState<IProductCartFront[]>([])

  async function fetchProductsInCart() {
    const list = await getProductInCart('1')
    setListProducts(list.products)
  }

  async function addProduct(product: IProductCartFront, quantity: number) {
    const productIndex = listProducts.findIndex(
      p => p.idProduct === product.idProduct
    )

    if (productIndex !== -1) {
      const updatedProducts = [...listProducts]
      updatedProducts[productIndex].quantity += quantity
      setListProducts(updatedProducts)
    } else {
      product.quantity = quantity
      setListProducts([...listProducts, product])
    }
  }

  async function updateQuantity(product: IProductCartFront, quantity: number) {
    const updatedProducts = [...listProducts]
    const productIndex = updatedProducts.findIndex(
      p => p.idProduct === product.idProduct
    )

    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      quantity
    }

    setListProducts(updatedProducts)
  }

  async function deleteProduct(productId: number) {
    const updatedProducts = listProducts.filter(
      product => product.idProduct !== productId
    )
    setListProducts(updatedProducts)
  }

  async function deleteAllProducts() {
    setListProducts([])
  }

  function returnProduct(idProduct: number) {
    const productIndex = listProducts.findIndex(p => p.idProduct === idProduct)

    return listProducts[productIndex]
  }

  function sumTotalPrice(): number {
    let totalPrice = 0
    listProducts.forEach(product => {
      totalPrice = totalPrice + product.amount * product.quantity
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

  useEffect(() => {
    fetchProductsInCart()
  }, [])

  return (
    <CartContext.Provider
      value={{
        fetchProductsInCart,
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
