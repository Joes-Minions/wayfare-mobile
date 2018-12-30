import React from 'react';
import { Text, View } from 'react-native';

const Header = ({onPress, label}) => {
const { buttonStyle, textStyle } = styles;
  return (
    <View style={buttonStyle} onPress={onPress} >
        <Text style={textStyle}>
            {label}
        </Text>
    </View>
  )
}


const styles = {
    buttonStyle: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent:'flex-start',
        backgroundColor: '#000',
        opacity: .7,
        marginLeft: 0,
        marginRight: 0,
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

export { Header };
