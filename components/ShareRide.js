import React from 'react'
import { Text, View } from 'react-native'
import { propChanged } from '../actionCreators';
import { Button } from './common'
import MapLocationPickerForm from './rides/MapLocationPickerForm'
import DatePickerForm from './rides/DatePickerForm'
/**
 *  Scene for ride sharing
 */
function RenderByIndex(props){
    console.log("current index " + props.index)
    switch(props.index){
        case 0:
            return <MapLocationPickerForm/>
        case 1:
            return <DatePickerForm/>
        default:
            return null
    }
}

class ShareRide extends React.Component {
    constructor(){
        super()
        this.state = {
            index : 0
        }
        this.renderOptions = this.renderOptions.bind(this)
        this.incrementIndex = this.incrementIndex.bind(this)
        this.decrementIndex = this.decrementIndex.bind(this)
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
    onNextPress(){
        this.incrementIndex()
    }
    onBackPress(){
        this.decrementIndex()

    }
    
    renderOptions(){
        if (this.state.index==0){
            return(
                <View  style={styles.optionsContainerStyle}>
                    <Button
                        label='Next'
                        onPress={this.onNextPress.bind(this)}
                        style={{flex:1,opacity:1}}
                    />
                </View>
                   
            )
        }
        else if (this.state.index > 0){
            return (
                <View style={styles.optionsContainerStyle}>
                    <Button
                        label='Back'
                        onPress={this.onBackPress.bind(this)}
                        style={{flex:1 ,opacity:1}}
                    />
                    <Button
                        label='Next'
                        onPress={this.onNextPress.bind(this)}
                        style={{flex:1, opacity:1}}

                    />
                </View>
            )
        }
    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <RenderByIndex
                    index={this.state.index}
                />
                {this.renderOptions()}
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
        bottom:0,
        position:'absolute',
        flexDirection: 'row',
        
        
    }
  }

export default ShareRide