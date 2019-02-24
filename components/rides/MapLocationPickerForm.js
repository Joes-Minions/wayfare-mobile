import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import {
   getRideInputData,
   toggleSearchResultModal,
   getCurrentLocation,
   getAddressPredictions
} from '../../actionCreators';

class MapLocationPickerForm extends Component {
   state = {
      initialLat: 0,
      initialLon: 0
   };

   componentDidMount() {
      this.props.getCurrentLocation();
   }

   componentDidUpdate(prevProps, prevState) {
      //this.props.getCurrentLocation();
   }

   render() {
      const { selectedPickUp, selectedDropOff } = this.props.selectedRouteAddresses || {};

      const initialRegion = {
         latitude: 37.548271,
         longitude: -121.988571,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421
      };

      return (
         <View style={styles.containerStyle}>
            { this.props.region.latitude &&
            <MapView
               style={{ flex: 1 }}
               provider="google"
               //initialRegion={initialRegion}
               region={this.props.region}
               showsUserLocation={true}
            >

               { selectedPickUp &&
                  <MapView.Marker
                     coordinate={{
                        latitude: selectedPickUp.latitude,
                        longitude: selectedPickUp.longitude
                     }}
                     pinColor="green"
                  />	
               }

               { selectedDropOff &&
                  <MapView.Marker
                     coordinate={{
                        latitude: selectedDropOff.latitude,
                        longitude:selectedDropOff.longitude
                     }}
                     pinColor="blue"
                  />	
               }

            </MapView>
            }

            <SearchBox
               getRideInputData={this.props.getRideInputData}
               toggleSearchResultModal={this.props.toggleSearchResultModal}
               getAddressPredictions={this.props.getAddressPredictions}
               selectedAddress={this.props.selectedRouteAddresses}
               selectedDate={this.props.selectedDate}
            />

            {/* Conditional Rendering of Search Results when toggleSearchResultModal is set */}
            {  (this.props.searchResultTypes.pickUp || this.props.searchResultTypes.dropOff) &&
               <SearchResults
                  predictions={this.props.predictions}
                  //getSelectedRouteAddresses={getSelectedRouteAddresses}
               />
			   }
         </View> 
      );
   }
}

const styles = {
   containerStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',      
      backgroundColor: '#E4EDF2'
   }
};

const mapStateToProps = (state) => {
   return {
      selectedAddress: state.findRideForm.selectedAddress || {},
      searchResultTypes: state.findRideForm.searchResultTypes || {},
      predictions: state.findRideForm.predictions || [],
      region: state.findRideForm.region,
      selectedDate: state.findRideForm.selectedDate || {}
   };
};

export default connect(mapStateToProps, {
   getRideInputData, toggleSearchResultModal, getCurrentLocation, getAddressPredictions
})(MapLocationPickerForm);
