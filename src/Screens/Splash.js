import React, { useEffect, } from 'react'
import { 
    StyleSheet, 
    View, 
    Text,
} from 'react-native'
import { displayName, } from '../../app.json'

export default ({ navigation, }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
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
