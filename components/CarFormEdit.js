import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { confirmCarAdded, updateCar } from '../actionCreators';
import { Button, Card, CardSection, Input } from './common';
import CarSuccessModal from './CarSuccessModal';

class CarFormEdit extends Component {
   state = {
      showSuccessModal: false,
      year: this.props.year,
      color: this.props.color,
      make: this.props.make,
      model: this.props.model
   };

   saveUpdatedCarForm() {
      // TODO TYUN: When onPress, still need to update DB through action!!!
      // Will be async call so need a Promise and then do the setState call
      const { year, color, make, model } = this.state;
      this.props.updateCar({ year, color, make, model });
      this.setState({ showSuccessModal: !this.state.showSuccessModal });
   }

   confirmedCarForm() {
      this.props.confirmCarAdded();
      this.setState({ showSuccessModal: !this.state.showSuccessModal });
      Actions.car();
   }

   render() {
      return (
         <View style={{ flex: 1, backgroundColor: '#E4EDF2' }}>
            <Card style={styles.additionalCardStyle}>
               <CardSection style={styles.additionalCardSectionStyle}>
                  <Input
                     label="Year"
                     value={this.state.year}
                     onChangeText={text => this.setState({ year: text })}
                     placeholder="2019"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Input
                     label="Color"
                     value={this.state.color}
                     onChangeText={text => this.setState({ color: text })}
                     placeholder="Black"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Input
                     label="Make"
                     value={this.state.make}
                     onChangeText={text => this.setState({ make: text })}
                     placeholder="Honda"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Input
                     label="Model"
                     value={this.state.model}
                     onChangeText={text => this.setState({ model: text })}
                     placeholder="Civic"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Button
                     label="Finish"
                     onPress={this.saveUpdatedCarForm.bind(this)}
                  />
               </CardSection>

               <CarSuccessModal
                  visible={this.state.showSuccessModal}
                  onAccept={this.confirmedCarForm.bind(this)}
               />
            </Card>
         </View>
      );
   }
}

const styles = {
   additionalCardStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      backgroundColor: '#E4EDF2'
   },
   additionalCardSectionStyle: {
      borderColor: '#ddd',
      borderBottomWidth: 1
   }
};

const mapStateToProps = (state) => {
   const { year, color, make, model } = state.carForm;
   return { year, color, make, model };
};

export default connect(mapStateToProps, { confirmCarAdded, updateCar })(CarFormEdit);
