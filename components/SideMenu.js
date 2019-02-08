import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Content, List, ListItem, Left, Body } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import AntDesign from '@expo/vector-icons/AntDesign';

class SideMenu extends Component {
   render() {
      const { email } = this.props.user.user;
      return (
         <View style={styles.menuContainerStyle}>
            {/* Transparent filler padding to see Iphone status bar */}
            <View style={styles.transparentPaddingStyle} />
            {/* Profile Container */}
            <View style={styles.profileContainerStyle}>
               <Text>Profile Picture HERE</Text>
               <View style={styles.profileNameBorderStyle}>
                  <Text style={styles.profileNameStyle}>{email}</Text>
               </View>
            </View>

            {/* Navigation List Container */}
            <View style={styles.navigationListStyle}>
               <Content>
                  <List>
                     <ListItem icon onPress={() => Actions.main({ type: 'reset' })}>
                        <Left>
                           <AntDesign name="bars" size={20} />
                        </Left>
                        <Body>
                           <Text>DASHBOARD</Text>
                        </Body>
                     </ListItem>

                     <ListItem icon onPress={()=> Actions.account()}>
                        <Left>
                           <AntDesign name="bars" size={20} />
                        </Left>
                        <Body>
                           <Text>ACCOUNT</Text>
                        </Body>
                     </ListItem>

                     <ListItem icon onPress={()=> Actions.verification()}>
                        <Left>
                           <AntDesign name="bars" size={20} />
                        </Left>
                        <Body>
                           <Text>VERIFICATION</Text>
                        </Body>
                     </ListItem>

                     <ListItem icon onPress={()=> Actions.car()}>
                        <Left>
                           <AntDesign name="bars" size={20} />
                        </Left>
                        <Body>
                           <Text>CAR</Text>
                        </Body>
                     </ListItem>
                  </List>
               </Content>
            </View>
         </View>
      );
   }
}

const styles = {
   menuContainerStyle: {
      flex: 1
   },
   transparentPaddingStyle: {
      height: 20,
      backgroundColor: '#1D394B'
   },
   profileContainerStyle: {
      backgroundColor: '#2980b9',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   profileNameBorderStyle: {
      borderBottomWidth: 1,
      paddingTop: 5,
      paddingBottom: 5,
      borderColor: '#ddd'
   },
   profileNameStyle: {
      fontSize: 18,
      color: '#ff9f43'
   },
   navigationListStyle: {
      flex: 2,
      backgroundColor: '#ecf0f1'
   }
};

const mapStateToProps = (state) => {
   return { user: state.session.user };
};

export default connect(mapStateToProps)(SideMenu);
