import React from 'react'

import { ThemeProvider } from 'styled-components/native'
import ThemeConfig from './src/global/theme'

import { Routes } from './src/routes'
import { CartContextProvider } from '@contexts/useCartContext'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <SafeAreaProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
