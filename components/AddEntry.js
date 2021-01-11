import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import UdaciSteppers from './UdaciSteppers'
import UdaciSlider from './UdaciSlider'
import DateHeader from './DateHeader'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}
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

  submit = () => {
    const key = timeToString()
    const entry = this.state
    // TODO Update Redux
    //
    // TODO Navigate to Home
    //
    // TODO Save to DB
    //
    // TODO Clear Local Notification
    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0
    }))
  }
  render() {
    const metaInfo = getMetricMetaInfo()
    return (
      <View>
        <DateHeader date={(new Date().toLocaleDateString())}/>
        <Text>{JSON.stringify(this.state)}</Text>
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]
          return (
          <View key={key}>
            {getIcon()}
            {type === 'slider'
              ? <UdaciSlider
                value={value}
                onChange={(value) => this.slide(key, value)}
                {...rest} />
              : <UdaciSteppers
                value={value}
                onIncrement={() => this.increment(key)}
                onDecrement={() => this.decrement(key)}
                {...rest} />
            }
          </View>
          )
        })}
      <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}

export default AddEntry
