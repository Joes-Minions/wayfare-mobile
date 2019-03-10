import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SwitchSelector from "react-native-switch-selector";
import NumericInput from 'react-native-numeric-input'
import Modal from "react-native-modal"

class PreferencesForm extends React.Component{
    render(){
        const {
            isModalVisible,
            toggleHandler,
            findPrefererences
        } = this.props;
        
        const departureOptions = [
            { label: "Morning", value: "1" },
            { label: "Afternoon", value: "1.5" },
            { label: "Night", value: "2" }
          ]

        const detourTimeOptions = [
            {label:"30 minutes",value: "30"},
            {label:"20 minutes",value: "20"},
            {label:"10 minutes",value: "10"}
        ]

        return(
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainerStyle}> 
                    
                            <View style={styles.modalSectionStyle}>
                                <Text style={styles.modalTextStyle}>
                                    Approximate Time of Departure
                                </Text>
                                <SwitchSelector
                                    options={departureOptions}
                                    initial={0}
                                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                                />
                            
                            </View>
                            <View style={styles.modalSectionStyle}>
                                <Text style={styles.modalTextStyle}>
                                    Maximum detour-time per Drop-off
                                </Text>
                                <SwitchSelector
                                    options={detourTimeOptions}
                                    initial={0}
                                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                                />
                            </View>
                            <View style={styles.modalSectionStyle}>
                                <Text style={styles.modalTextStyle}>
                                    Capacity
                                </Text>
                                <NumericInput onChange={value => console.log(value)} />
                            </View>
                            <TouchableOpacity style={{backgroundColor:'#2F5167', flexDirection:'column', justifyContent:'center',flex:1, alignItems:'center' }} onPress={toggleHandler}>
                                <Text style={styles.modalTextStyle}>Save</Text>
                            </TouchableOpacity>
                    </View>
                </Modal>
        )
    }
}
styles = {
    modalContainerStyle:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        flex:.8
    },
    modalTextStyle:{
        color:'white',
        fontSize: 25
    },
    modalSectionStyle:{
        height: '20%',
        flexDirection:'column',
        alignItems:'center',
        flex:1

    }
}

export default PreferencesForm