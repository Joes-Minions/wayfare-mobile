import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { propChanged } from '../actionCreators';
import { Button, Card, CardSection, Input } from './common';

class CarForm extends Component {
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
                     onChangeText={text => this.props.propChanged({ prop: 'make', value: text })}
                     placeholder="Civic"
                  />
               </CardSection>

               <CardSection style={styles.additionalCardSectionStyle}>
                  <Button
                     label="Finish"
                  />
               </CardSection>
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
   const { year, make, model } = state.carForm;
   return { year, make, model };
};

export default connect(mapStateToProps, { propChanged })(CarForm);
