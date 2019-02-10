import React from 'react'
import { Text, View } from 'react-native'
import { MapView} from 'expo'
import DatePickerForm from './rides/DatePickerForm';
import MapLocationPickerForm from './rides/MapLocationPickerForm'
/**
 *  Scene for ride finding
 */
function RenderByIndex(props){
    switch(props.index){
        case 0: 
            return <MapLocationPickerForm/>
        case 1:
            return <DatePickerForm/>
        default:
            return <MapLocationPickerForm/>
    }
}

class FindRide extends React.Component {
    constructor(){
        super()
        this.state = {
            index : 0
        }
        this.renderOptions = this.renderOptions.bind(this)
    }
    incrementIndex(state){
        this.setState((state)=>({
            index: state.index + 1
        }))
    }
    decrementIndex(state){
        this.setState((state)=>({
            index: state.index - 1
        }))
    }
    renderOptions(){

    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <RenderByIndex
                    index={this.state.index}
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