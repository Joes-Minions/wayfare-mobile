import React from 'react'
import { Text, View } from 'react-native'
import { propChanged } from '../actionCreators';

/**
 *  Scene for ride sharing
 */
function RenderByIndex(prop){
}

class ShareRide extends React.Component {
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

export default ShareRide