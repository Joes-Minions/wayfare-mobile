import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Title, Header, Left, Right, Body } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

class HeaderWithMenu extends Component {
   render() {
      return (
      <View>
         <Header style={styles.headerStyle}>
            <Left>
               <AntDesign
                  color={'#fff'}
                  name="menufold"
                  size={25}
                  onPress={() => {
                     console.log("Menu Pressed")
                     Actions.drawerOpen();
                  }}
               />
            </Left>
            <Body>
               <Title style={styles.headerTitleStyle}>
                  {this.props.title}
               </Title>
            </Body>
            <Right />
         </Header>
         <StatusBar barStyle="light-content" />
      </View>
      );
   }
}

const styles = {
   headerStyle: {
      backgroundColor: '#1D394B'
   },
   headerTitleStyle: {
      color: '#FFFFFF',
      fontFamily: 'OpenSans-Regular',
      fontSize: 18
   }
};

export { HeaderWithMenu };
