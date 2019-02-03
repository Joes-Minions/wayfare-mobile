import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderWithMenu } from './common';

class Account extends Component {
   render() {
      return (
         <View style={styles.containerStyle}>
            <HeaderWithMenu title="Account" />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>Account Page</Text> 
            </View>
         </View>
      );
   }
}

const styles = {
   containerStyle: {
      flex: 1
   }
}

export default Account;
