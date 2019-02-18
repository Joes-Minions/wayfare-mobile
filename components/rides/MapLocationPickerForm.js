import React from 'react'
import {View} from 'react-native'
import {Button } from '../common'
import { MapView } from 'expo'
import {SearchBox} from './SearchBox'

class MapLocationPickerForm extends React.Component {
    render(){
        return(
            <View style={styles.containerStyle}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
               />
                <SearchBox 
                    // getInputData={getInputData}
                    // toggleSearchResultModal={toggleSearchResultModal}
                    // getAddressPredictions={getAddressPredictions}
                    // selectedAddress={selectedAddress}
                />
            </View>
           
        )
    }
     
}
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',      
        backgroundColor: '#E4EDF2'
    }
  }
export default MapLocationPickerForm