import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'

class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  }

  // We are going to implement step counters for run, bike, swim
  // and sliders for sleep, eat

  increment = (metric) => {
    const { step, max } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }

  decrement = (metric) => {
    const { step, max } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] - step
      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => ({
     [metric]: value
    }))
  }

  render() {
    return (
      <View>
        <Text>fpoop</Text>
        <Text>
          {getMetricMetaInfo('swim').getIcon()}
        </Text>
      </View>

    )
  }
}

export default AddEntry
