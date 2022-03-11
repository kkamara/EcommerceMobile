import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { useSelector, useDispatch, } from 'react-redux'

export default function({ navigation, }) {
  // const cities = useSelector(state => state.cities.data)
  // const dispatch = useDispatch()

  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.text}>test</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  text: {
    color: 'yellow',
    fontSize: 40,
    margin: 10,
  },
})
