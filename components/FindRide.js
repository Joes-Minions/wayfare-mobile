import React from 'react'
import { Text, View } from 'react-native'
import SearchBox from './shareRide/SearchBox'
import { MapView} from 'expo'
/**
 *  Scene for ride finding
 */
function RenderByIndex(){

}

class FindRide extends React.Component {
    constructor(){
        super()
        this.state = {
            index : 0
        }
        this.renderOptions = this.renderOptions.bind(this)
    }
    renderOptions(){

    }

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

export default FindRide