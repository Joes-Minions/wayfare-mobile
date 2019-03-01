import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

class MapLocationPickerForm extends Component {

   componentDidMount() {
      this.props.getCurrentLocation();
   }

   render() {
      const { selectedPickUp, selectedDropOff } = this.props.selectedRouteAddresses || {};

      return (
         <View style={styles.containerStyle}>
            { this.props.region.latitude &&
            <MapView
               style={{ flex: 1 }}
               provider="google"
               region={this.props.region}
               showsUserLocation={true}
            >

               { selectedPickUp &&
                  <MapView.Marker
                     coordinate={{
                        latitude: selectedPickUp.result.geometry.location.lat,
                        longitude: selectedPickUp.result.geometry.location.lng
                     }}
                     pinColor="green"
                  />	
               }

               { selectedDropOff &&
                  <MapView.Marker
                     coordinate={{
                        latitude: selectedDropOff.result.geometry.location.lat,
                        longitude: selectedDropOff.result.geometry.location.lng
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
               selectedRouteAddresses={this.props.selectedRouteAddresses}
               selectedDate={this.props.selectedDate}
               searchResultTypes={this.props.searchResultTypes}
               inputData={this.props.inputData}
            />

            {/* Conditional Rendering of Search Results when toggleSearchResultModal is set */}
            {  (this.props.searchResultTypes.pickUp || this.props.searchResultTypes.dropOff) &&
               <SearchResults
                  predictions={this.props.predictions}
                  getSelectedRouteAddresses={this.props.getSelectedRouteAddresses}
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

export default MapLocationPickerForm;
