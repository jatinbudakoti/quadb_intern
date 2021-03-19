import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Order from './src/Screens/Order';
import GoOut from './src/Screens/GoOut';
import Pro from './src/Screens/Pro';
import Donate from './src/Screens/Donate';
import Account from './src/Screens/Account';
import BottomTab from './src/Components/BottomTab';


const navigator = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <navigator.Navigator tabBar = {(props) => <BottomTab {...props} />}>
        <navigator.Screen name = 'order' component = {Order} />
        <navigator.Screen name = 'goout' component = {GoOut} />
        <navigator.Screen name = 'pro' component = {Pro} />
        <navigator.Screen name = 'donate' component = {Donate} />
        <navigator.Screen name = 'account' component = {Account} />
      </navigator.Navigator>
    </NavigationContainer>
  )
}

export default App;