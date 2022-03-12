/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import { createStackNavigator, } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator, } from '@react-navigation/material-bottom-tabs';
import { IconComponentProvider, } from '@react-native-material/core'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from './Screens/Home'
import Splash from './Screens/Splash'
import { Provider } from 'react-redux'
import Store from './Redux/store'

const Tabs = createMaterialBottomTabNavigator()

function BottomBarStack() {
  return (
    <Tabs.Navigator
      initialRouteName='Home'
      barStyle={{ 
        backgroundColor: 'gray',
        fontSize: 24,
      }}
    >
      <Tabs.Screen 
        name="Home" 
        component={Home} 
      />
    </Tabs.Navigator>
  )
}

const RootStack = createStackNavigator()

function Routes() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Home'
        >
          <RootStack.Screen 
            name="Splash" 
            component={Splash} 
            options={{ headerShown: false, }}
          />
          <RootStack.Screen 
            name="App" 
            component={BottomBarStack} 
            options={{ headerShown: false, }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default () => (
  <IconComponentProvider IconComponent={MaterialIcons}>
    <Routes />
  </IconComponentProvider>
)
