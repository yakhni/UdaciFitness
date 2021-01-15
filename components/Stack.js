import React from 'react'
import Tabs from './Tabs'
import { createStackNavigator } from '@react-navigation/stack';
import EntryDetail from './EntryDetail'

const Stack = createStackNavigator()
export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='UdaciFitness' component={Tabs} />
      <Stack.Screen name='EntryDetail' component={EntryDetail} />
    </Stack.Navigator>
  )
}
