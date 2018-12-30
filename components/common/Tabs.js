import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import {Card} from './'

const Tabs = ( props) => {
  return (
        <TouchableOpacity style={[styles.buttonStyle, props.style]} onPress={props.onPress}>
            <Text style={styles.textStyle}>
                {props.label}
            </Text>
        </TouchableOpacity>
  )
}

const styles = {
    buttonStyle: {
        flex:1,
        borderColor: 'white',
        alignItems: 'center',
        backgroundColor: '#2F5167',
        borderColor:'#FFFFFF',
        borderWidth: 0.5,
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        padding:17
    }
}

export { Tabs };
