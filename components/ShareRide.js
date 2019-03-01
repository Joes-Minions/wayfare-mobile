import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { Button } from 'native-base'
import MapLocationPickerForm from './rides/MapLocationPickerForm'
import PreferencesForm from './rides/PreferencesForm'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    getRideInputDataForShareRide,
    toggleSearchResultModalForShareRide,
    getCurrentLocationForShareRide,
    getAddressPredictionsForShareRide,
    getSelectedRouteAddressesForShareRide
} from '../actionCreators';

/**
 *  Scene for ride sharing
 */

class ShareRide extends React.Component {
    constructor(){
        super()
        this.state = {
            index : 0,
            isModalVisible: false,
        }
        this.renderOptions = this.renderOptions.bind(this)
        this.renderPreferencesButton = this.renderPreferencesButton.bind(this)
    }
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    renderPreferencesButton(){
        return(
            <View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
					<Icon style={{ marginRight: 5 }} name="edit" color="white" />
					<Text style={{ color: "white" }}>Set Preferences</Text>
			</View>
        )
    }
    renderOptions(){
            return(
                <Button
						small
						iconLeft
						warning
						onPress={this._toggleModal}
					>
						{this.renderPreferencesButton()}
				</Button>
            )
    }
    render(){
        const {
            // Action Creators that will be passed to MapLocationPickerForm
            getRideInputDataForShareRide,
            toggleSearchResultModalForShareRide,
            getCurrentLocationForShareRide,
            getAddressPredictionsForShareRide,
            getSelectedRouteAddressesForShareRide,

            // State from Redux store for ShareRide passed into MapLocationPickerForm
            selectedRouteAddresses,
            searchResultTypes,
            predictions,
            region,
            selectedDate,
            inputData
        } = this.props;

        return(
            <View style={styles.containerStyle}>
                <MapLocationPickerForm
                    getRideInputData={getRideInputDataForShareRide}
                    toggleSearchResultModal={toggleSearchResultModalForShareRide}
                    getCurrentLocation={getCurrentLocationForShareRide}
                    getAddressPredictions={getAddressPredictionsForShareRide}
                    getSelectedRouteAddresses={getSelectedRouteAddressesForShareRide}
                    selectedRouteAddresses={selectedRouteAddresses}
                    searchResultTypes={searchResultTypes}
                    predictions={predictions}
                    region={region}
                    selectedDate={selectedDate}
                    inputData={inputData}
                />
                <View style={styles.optionsContainerStyle}>
                    {this.renderOptions()}
                </View>
                <PreferencesForm isModalVisible={this.state.isModalVisible} toggleHandler={this._toggleModal}/>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',        
     
    },
    optionsContainerStyle:{
        position:'absolute',
        flexDirection: 'row',
        marginLeft: 15,
    }
}

const mapStateToProps = (state) => {
    console.log(state.shareRideForm.predictions);
    return {
        selectedRouteAddresses: state.shareRideForm.selectedRouteAddresses || {},
        searchResultTypes: state.shareRideForm.searchResultTypes || {},
        predictions: state.shareRideForm.predictions || [],
        region: state.shareRideForm.region,
        selectedDate: state.shareRideForm.selectedDate || {},
        inputData: state.shareRideForm.inputData || {}
    };
};

export default connect(mapStateToProps, {
    getRideInputDataForShareRide,
    toggleSearchResultModalForShareRide,
    getCurrentLocationForShareRide,
    getAddressPredictionsForShareRide,
    getSelectedRouteAddressesForShareRide
})(ShareRide)
