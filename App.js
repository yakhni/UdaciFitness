import React from 'react'
import { Text, View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import History from './components/History'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { purple, white } from './utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome, Entypo } from '@expo/vector-icons'

const Tab = Platform.OS === "ios"
  ? createBottomTabNavigator()
  : createMaterialBottomTabNavigator()

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const RouteConfigs = {
  History:{
    name: "History",
    component: History,
    options: {
      tabBarIcon: ({color}) => <Ionicons name='ios-bookmarks' size={20} color={color} />,
    title: 'History'
    }
  },
  AddEntry:{
    component: AddEntry,
    name: "Add Entry",
    options: {
      tabBarIcon: ({color}) => <FontAwesome name='plus-square' size={20} color={color} />,
      title: 'Add Entry'
    }
  }
}

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <NavigationContainer>
        <View style={{height: 20}} />
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
