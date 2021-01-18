import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <View>
        <AddEntry />
      </View>
    </Provider>
  )
}
