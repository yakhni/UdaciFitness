import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import MetricCard from './MetricCard'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import {addEntry} from "../actions";
import { removeEntry } from "../utils/api";
import { timeToString, getDailyReminderValue } from '../utils/helpers'

class EntryDetail extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.metrics !== null && !nextProps.metrics[0].today
  }

  componentDidMount(){
    this.setTitle(this.props.route.params.entryId)
  }

  setTitle = (entryId) => {
    if (!entryId) return

    const year = entryId.slice(0, 4)
    const month = entryId.slice(5, 7)
    const day = entryId.slice(8)

    this.props.navigation.setOptions({
      title: `${month}/${day}/${year}`
    })
  }

  reset = () => {
    const { remove, goBack, entryId } = this.props;
    remove();
    goBack();
    removeEntry(entryId);
  }

  render() {
    const { entryId, metrics } = this.props
    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics[0]} date={entryId}/>
          <TextButton onPress={this.reset} style={{margin: 20}}>Reset</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15
  }
})

function mapStateToProps(state, { route }) {
  const { entryId } = route.params
  return {
    entryId,
    metrics: state[entryId],
  }
}

function mapDispatchToProps(dispatch, {route, navigation}) {
  const {entryId} = route.params;
    return {
      remove: () => dispatch(addEntry( {
        [entryId]: timeToString() === entryId
          ? getDailyReminderValue()
          : null
        })),
        goBack: () => navigation.goBack()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail)
