import React from 'react'
import { 
  Pressable, 
  StyleSheet,
  Text,
} from 'react-native'

export default Button = props => (
  <Pressable 
    onPress={props.onPress ? props.onPress : null}
    style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
  >
    {props.children}
  </Pressable>
)

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 40,
    margin: 10,
  },
})
