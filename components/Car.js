import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';

// TODO TYUN: Need to setup Car in Session redux state
// Then, we need to mapStateToProps and read the verification state to
// determine what we render on this page -- will do once DB setup
class Car extends Component {
   // Will delete later and replace with Redux state
   state = {
      car: null
   };

   renderCarPage() {
      if (!this.state.car) {
         // ... Need to implement logic to display car info
      }
      // If car is null, display page to add information on car
      return (
         <View style={styles.contentStyle}>
            <Text style={{ fontSize: 18, color: 'black' }}>
               Please add information about your car if you plan to be a driver.
            </Text>
            <Button
               label="Add Car"
               onPress={() => Actions.carForm()}
            />
         </View>
      );
   }

   render() {
      return (
         <View style={styles.containerStyle}>
            {this.renderCarPage()}
         </View>
      );
   }
}

const styles = {
   containerStyle: {
      flex: 1,
      backgroundColor: '#E4EDF2'
   },
   contentStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
};

export default Car;
