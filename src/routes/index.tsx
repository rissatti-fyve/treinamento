// Bibliotecas Externas
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '@screens/Home'
import { ProductDetails } from '@screens/ProductDetails'
import { Cart } from '@screens/Cart'
import { Modal } from 'react-native'

const Stack = createStackNavigator()

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerBackTitleVisible: false,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
            presentation: 'modal'
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerBackTitleVisible: false,
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
