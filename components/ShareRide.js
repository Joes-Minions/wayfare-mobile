import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { propChanged } from '../actionCreators';
import { Button } from 'native-base'
import { Card } from './common'
import MapLocationPickerForm from './rides/MapLocationPickerForm'
import PreferencesForm from './rides/PreferencesForm'
import Modal from "react-native-modal"
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from "react-native-switch-selector";
import NumericInput from 'react-native-numeric-input'

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
        const options = [
            { label: "Morning", value: "1" },
            { label: "Afternoon", value: "1.5" },
            { label: "Night", value: "2" }
          ]

        return(
            <View style={styles.containerStyle}>
                <MapLocationPickerForm/>
                <View style={styles.optionsContainerStyle}>
                    {this.renderOptions()}
                </View>
                
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalContainerStyle}> 
                    
                            <Card>
                                <Text style={styles.modalTextStyle}>
                                    Approximate Time of Departure
                                </Text>
                                <SwitchSelector
                                    options={options}
                                    initial={0}
                                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                                />
                            
                            </Card>
                            <Card>
                                <Text style={styles.modalTextStyle}>
                                    Capacity
                                </Text>
                                <NumericInput onChange={value => console.log(value)} />
                            </Card>
                            <TouchableOpacity onPress={this._toggleModal}>
                                <Text>Hide me!</Text>
                            </TouchableOpacity>
                     </View>
                </Modal>
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
    },
    modalContainerStyle:{
        flex:1,
        flexDirection:'column',
        alignItems:'stretch',

    },
    modalTextStyle:{
        color:'white'
    }
  }

export default ShareRide