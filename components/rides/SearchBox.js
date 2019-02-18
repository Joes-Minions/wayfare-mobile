import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { Button, View, InputGroup, Input } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

//({ getRideInputData, toggleSearchResultModal, getAddressPredictions, selectedRouteAddresses, selectedDate })
class SearchBox extends Component {
	state = {
		isDateTimePickerVisible: false
	};

	render() {
		const {
			getRideInputData,
			toggleSearchResultModal,
			getAddressPredictions,
			selectedRouteAddresses,
			selectedDate
		} = this.props;

		const { selectedPickUp, selectedDropOff } = selectedRouteAddresses || {};

		const handleInput = (key, val) => {
			getRideInputData({ key, value:val });
			//getAddressPredictions();
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

		const handleDatePicked = (date) => {
			console.log(date);
			this.setState({ isDateTimePickerVisible: false });
		};

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
							value={selectedPickUp && selectedPickUp.name}
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
							value={selectedDropOff && selectedDropOff.name}
						/>
					</InputGroup>
				</View>
				<View style={styles.dateButtonWrapper}>
					<Button
						small
						iconLeft
						warning
						onPress={() => this.setState({ isDateTimePickerVisible: true })}
					>
						{renderDateButton()}
					</Button>
				</View>
				<DateTimePicker
					isVisible={this.state.isDateTimePickerVisible}
					onConfirm={handleDatePicked.bind(this)}
					onCancel={() => this.setState({ isDateTimePickerVisible: false })}
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
	dateButtonWrapper: {
		marginLeft: 15,
		marginTop: 5
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
