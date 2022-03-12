import React from 'react'
import { 
  StyleSheet, 
  Image,
  View,
} from 'react-native'

export default function Loader() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.loader}
        source={require('../../assets/splash.min.jpg')} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    height: 225,
    width: 350,
    borderRadius: 10,
  },
})
