import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
//import DatePickerForm from './rides/DatePickerForm';
import MapLocationPickerForm from './rides/MapLocationPickerForm';
import {
    getRideInputData,
    toggleSearchResultModal,
    getCurrentLocation,
    getAddressPredictions,
    getSelectedRouteAddresses
} from '../actionCreators';
/**
 *  Scene for ride finding
 */

class FindRide extends Component {
    render() {
        const {
            // Action Creators that will be passed to MapLocationPickerForm
            getRideInputData,
            toggleSearchResultModal,
            getCurrentLocation,
            getAddressPredictions,
            getSelectedRouteAddresses,

            // State from Redux store for FindRide passed into MapLocationPickerForm
            selectedRouteAddresses,
            searchResultTypes,
            predictions,
            region,
            selectedDate,
            inputData
        } = this.props;

        return (
            <View style={styles.containerStyle}>
                <MapLocationPickerForm
                    getRideInputData={getRideInputData}
                    toggleSearchResultModal={toggleSearchResultModal}
                    getCurrentLocation={getCurrentLocation}
                    getAddressPredictions={getAddressPredictions}
                    getSelectedRouteAddresses={getSelectedRouteAddresses}
                    selectedRouteAddresses={selectedRouteAddresses}
                    searchResultTypes={searchResultTypes}
                    predictions={predictions}
                    region={region}
                    selectedDate={selectedDate}
                    inputData={inputData}
                />
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
        selectedRouteAddresses: state.findRideForm.selectedRouteAddresses || {},
        searchResultTypes: state.findRideForm.searchResultTypes || {},
        predictions: state.findRideForm.predictions || [],
        region: state.findRideForm.region,
        selectedDate: state.findRideForm.selectedDate || {},
        inputData: state.findRideForm.inputData
    };
};

export default connect(mapStateToProps, {
    getRideInputData,
    toggleSearchResultModal,
    getCurrentLocation,
    getAddressPredictions,
    getSelectedRouteAddresses
})(FindRide);
