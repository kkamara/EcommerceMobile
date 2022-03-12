import React, { useEffect, } from 'react'
import { 
    StyleSheet, 
    View, 
    Text,
} from 'react-native'
import { useDispatch, } from 'react-redux'
import { getProducts, } from '../Redux/actions/productActions'
import { displayName, } from '../../app.json'

export default ({ navigation, }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    setTimeout(() => {
      navigation.replace('App')
    }, 2000)
  })

  return (
    <View
      style={styles.body}
    >
      <Text style={styles.text}>{displayName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  text: {
    fontSize: 40,
    color: '#fff',
  },
})
