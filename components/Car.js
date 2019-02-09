import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button, Confirm } from './common';
import { deleteCar } from '../actionCreators';

// TODO TYUN: Need to setup Car in Session redux state
// Then, we need to mapStateToProps and read the verification state to
// determine what we render on this page -- will do once DB setup
class Car extends Component {
   state = { showModal: false }

   editCarInfo() {
      Actions.editCarForm({
         year: this.props.year,
         color: this.props.color,
         make: this.props.make,
         model: this.props.model
      });
   }

   onAccept() {
      this.props.deleteCar();
   }

   onDecline() {
      this.setState({ showModal: false });
   }

   renderCarPage() {
      if (this.props.car !== null) {
         return (
            <View style={styles.contentStyle}>
               <View>
                  <Text>Hi, {this.props.name}</Text>
                  <Text>Your Car:</Text>
               </View>

               <View style={styles.carInfoStyle}>
                  <Text style={styles.carInfoTextStyle}>Year: {this.props.car.year}</Text>
                  <Text style={styles.carInfoTextStyle}>Color: {this.props.car.color}</Text>
                  <Text style={styles.carInfoTextStyle}>Make: {this.props.car.make}</Text>
                  <Text style={{ fontSize: 28 }}>Model: {this.props.car.model}</Text>
               </View>

               <View>
                  <Button
                     label="Edit Car Information"
                     onPress={this.editCarInfo.bind(this)}
                  />
                  <Button
                     label="Delete Car"
                     onPress={() => this.setState({ showModal: !this.state.showModal })}
                  />
               </View>

               <Confirm
                  label="Are you sure you want to delete this?"
                  visible={this.state.showModal}
                  onAccept={this.onAccept.bind(this)}
                  onDecline={this.onDecline.bind(this)}
               />
            </View>
         );
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
   },
   carInfoStyle: {
      backgroundColor: '#E4EDF2',
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      padding: 10
   },
   carInfoTextStyle: {
      fontSize: 28,
      paddingBottom: 10
   }
};

const mapStateToProps = (state) => {
   const { year, color, make, model } = state.carForm;

   // Check if the CarForm is empty to determine if the current user
   // has a Car and needs Car Info to be displayed
   if (year !== "" && color !== "" && make !== "" && model !== "") {
      return {
         car: {
            year,
            color,
            make,
            model
         },
         name: state.session.user.user.email
      };
   }

   return {
      car: null
   };
};

export default connect(mapStateToProps, { deleteCar })(Car);
