import React from 'react'
import { View } from 'react-native'


const Card = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    backgroundColor: '#2F5167',
    flex: 1
  }
}

export { Card }
