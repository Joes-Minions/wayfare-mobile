import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({onPress, label}, props) => {
const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={[buttonStyle, props.style]} onPress={onPress} >
        <Text style={[textStyle, props.style]}>
            {label}
        </Text>
    </TouchableOpacity>
  )
}


const styles = {
    buttonStyle: {
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#E4AF8D',
        opacity: .7

    },
    textStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    }
}

export { Button };
