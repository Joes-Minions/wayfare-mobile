import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';

class CarSuccessModal extends Component {

   render () {
      return (
         <Modal
            visible={this.props.visible}
            transparent
            animationType="slide"
            onRequestClose={() => Actions.car()}
         >
            <View style={styles.containerStyle}>
               <CardSection>
                  <Text style={styles.headerTextStyle}>Car Added!</Text>
               </CardSection>

               <CardSection>
                  <Text style={{ color: 'white' }}>
                     Hi, {this.props.name}!
                  </Text>

                  <Text style={{ color: 'white' }}>
                     We have added the following car to your account:
                  </Text>
               </CardSection>

               <CardSection>
                  <Text style={{ color: 'white' }}>{' '}Year:{'   '}{this.props.year}</Text>
                  <Text style={{ color: 'white' }}>{' '}Color:{'   '}{this.props.color}</Text>
                  <Text style={{ color: 'white' }}>{' '}Make:{'   '}{this.props.make}</Text>
                  <Text style={{ color: 'white' }}>Model:{'   '}{this.props.model}</Text>
               </CardSection>

               <CardSection>
                  <Button
                     label="Confirm"
                     onPress={this.props.onAccept}
                  />
               </CardSection>
            </View>
         </Modal>
      );
   }
}

const styles = {
   containerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   headerTextStyle: {
      fontSize: 40,
      color: 'white'
   }
};

const mapStateToProps = (state) => {
   const { year, color, make, model } = state.carForm;
   return {
      name: state.session.user.user.email,
      year,
      color,
      make,
      model
   };
};

export default connect(mapStateToProps)(CarSuccessModal);
