import React from 'react'
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native'

export default function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}
