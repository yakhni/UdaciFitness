import React, { Component } from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { NavigationContainer } from '@react-navigation/native';
import UdaciStatusBar from './components/UdaciStatusBar'
import RootStack from './components/Stack'


class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <UdaciStatusBar/>
          <View style={{flex: 1}}>
            <RootStack />
          </View>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
