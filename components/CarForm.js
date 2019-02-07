import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { propChanged, confirmCarAdded } from '../actionCreators';
import { Button, Card, CardSection, Input } from './common';
import CarSuccessModal from './CarSuccessModal';

class CarForm extends Component {
   state = { showSuccessModal: false };

   saveCarForm() {
      // TODO TYUN: When onPress, still need to save to DB through action!!!
      // Will be async call so need a Promise and then do the setState call
      this.setState({ showSuccessModal: !this.state.showSuccessModal });
   }

   confirmedCarForm() {
      this.props.confirmCarAdded();
      Actions.car();
   }

   render() {
      return (
         <View style={{ flex: 1, backgroundColor: '#E4EDF2' }}>
            <Card style={styles.additionalCardStyle}>
               <CardSection style={styles.additionalCardSectionStyle}>
                  <Input
                     label="Year"
                     value={this.props.year}
                     onChangeText={text => this.props.propChanged({ prop: 'year', value: text })}
                     placeholder="2019"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Input
                     label="Color"
                     value={this.props.color}
                     onChangeText={text => this.props.propChanged({ prop: 'color', value: text })}
                     placeholder="Black"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Input
                     label="Make"
                     value={this.props.make}
                     onChangeText={text => this.props.propChanged({ prop: 'make', value: text })}
                     placeholder="Honda"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Input
                     label="Model"
                     value={this.props.model}
                     onChangeText={text => this.props.propChanged({ prop: 'model', value: text })}
                     placeholder="Civic"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Button
                     label="Finish"
                     onPress={this.saveCarForm.bind(this)}
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

export default connect(mapStateToProps, { propChanged, confirmCarAdded })(CarForm);
