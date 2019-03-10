import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { Button, View, InputGroup, Input } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import PreferencesForm from './PreferencesForm'

//({ getRideInputData, toggleSearchResultModal, getAddressPredictions, selectedRouteAddresses, selectedDate })
class SearchBox extends Component {
	state = {
		isDateTimePickerVisible: false,
		isPreferenceModalVisible: false
	};

	render() {
		const {
			getRideInputData,
			toggleSearchResultModal,
			getAddressPredictions,
			selectedRouteAddresses,
			selectedDate,
			searchResultTypes,
			inputData
		} = this.props;

		const { selectedPickUp, selectedDropOff } = selectedRouteAddresses || {};

		const handleInput = (key, val) => {
			getRideInputData({ inputType: key, inputData: val });
			getAddressPredictions({ searchResultTypes, inputData });
		};
		
		const renderDateButton = () => {
			if (selectedDate === {}) {
				return (
					<View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
						<Icon style={{ marginRight: 5 }} name="calendar" color="white" />
						<Text>
							{selectedDate}
						</Text>
					</View>
				);
			}

			return (
				<View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
					<Icon style={{ marginRight: 5 }} name="calendar" color="white" />
					<Text style={{ color: "white" }}>Select Date</Text>
				</View>
			);
		};

		const renderPreferencesButton = () =>{
			return(
				<View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
						<Icon style={{ marginRight: 5 }} name="edit" color="white" />
						<Text style={{ color: "white" }}>Set Preferences</Text>
				</View>
			)
		}

		const handleDatePicked = (date) => {
			console.log(date);
			this.setState({ isDateTimePickerVisible: false });
		};

		_saveModal = () =>
        	this.setState({ isPreferenceModalVisible: false });

		return (
			<View style={styles.searchBox}>
				<View style={styles.inputWrapper}>
					<Text style={styles.label}>PICK UP</Text>
					<InputGroup>
						<Icon name="search" size={15} color="#FF5E3A"/>
						<Input 
							onFocus={() => toggleSearchResultModal("pickUp")}
							style={styles.inputSearch}
							placeholder="Choose pick-up location"
							onChangeText={handleInput.bind(this, "pickUp")}
							value={selectedPickUp && selectedPickUp.result.name}
						/>
					</InputGroup>
				</View>
				<View style={styles.secondInputWrapper}>
					<Text style={styles.label}>DROP-OFF</Text>
					<InputGroup>
						<Icon name="search" size={15} color="#FF5E3A"/>
						<Input
							onFocus={() => toggleSearchResultModal("dropOff")}
							style={styles.inputSearch}
							placeholder="Choose drop-off location"
							onChangeText={handleInput.bind(this, "dropOff")}
							value={selectedDropOff && selectedDropOff.result.name}
						/>
					</InputGroup>
				</View>
				<View style={styles.buttonsWrapper}>
					<Button
						small
						iconLeft
						warning
						onPress={() => this.setState({ isDateTimePickerVisible: true })}
					>
						{renderDateButton()}
					</Button>
					<Button
						small
						iconLeft
						warning
						onPress={()=> this.setState({ isPreferenceModalVisible: true})}
					>
						{renderPreferencesButton()}
					</Button>
				</View>
				<DateTimePicker
					isVisible={this.state.isDateTimePickerVisible}
					onConfirm={handleDatePicked.bind(this)}
					onCancel={() => this.setState({ isDateTimePickerVisible: false })}
				/>
				<PreferencesForm 
					isModalVisible={this.state.isPreferenceModalVisible} 
					toggleHandler={_saveModal.bind(this)}
				/>

			</View>
		);
	}
}

var width = Dimensions.get("window").width; //full width

const styles = {
    searchBox: {
        top: 0,
        position: 'absolute',
        width: width
    },
    inputWrapper: {
        marginLeft: 15,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 0,
        backgroundColor: '#fff',
        opacity: 0.9,
        borderRadius: 7
    },
    secondInputWrapper: {
        marginLeft: 15,
        marginRight: 10,
        marginTop: 0,
        backgroundColor: '#fff',
        opacity: 0.9,
        borderRadius: 7
	},
	buttonsWrapper: {
		marginLeft: 15,
		marginRight: 15,
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
    inputSearch: {
        fontSize: 14
    },
    label: {
        fontSize: 10,
        fontStyle: 'italic',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 0
    }
};

export default SearchBox;
