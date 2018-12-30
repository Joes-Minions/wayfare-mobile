import React from 'react';
import { ImageBackground, Image } from 'react-native';

const LogoBanner = ({label}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
            {label}
        </Text>
    </TouchableOpacity>
  )
}

export { LogoBanner };
