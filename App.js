import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { NavigationContainer } from '@react-navigation/native';
import UdaciStatusBar from './components/UdaciStatusBar'

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <NavigationContainer>
        <UdaciStatusBar/>
        <View style={{flex: 1}}>
          <Tab.Navigator {...TabNavigatorConfig} >
            <Tab.Screen {...RouteConfigs['History']} />
            <Tab.Screen {...RouteConfigs['AddEntry']} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  )
}
