import React from 'react'
import {View, Text } from 'react-native'
import { Button, CardSection, Card } from '../common';
import { connect } from 'react-redux'
import { roundtripUpdated } from '../../actionCreators'
class RoundtripForm extends React.Component{
    constructor(){
        super()
        this.renderMessage = this.renderMessage.bind(this)
    }

    toggleRoundtrip(){
        const { roundTrip }  = this.props       
        if ((roundTrip==false) || roundTrip ==null){
            const newRoundtrip = true
            this.props.roundtripUpdated(newRoundtrip)
        }
       
    }
    componentWillMount(){
        console.log("toggled roundtrip  " + this.props.roundTrip)
    }
    unToggleRoundtrip(){
        const { roundTrip }  = this.props    
        if ((roundTrip==true)||(roundTrip ==null)){ 
            const newRoundtrip = false
            this.props.roundtripUpdated(newRoundtrip)
         }
    }
    // need another method for dealing with no toggles.
    renderMessage(){
        if (this.props.findOrShare==1){
            return(
                <Text>
                    Are you finding a round-trip ride?
                </Text>
            )
        }
        else{
            return(
                <Text>
                    Are you offering a round-trip ride?
                </Text>
            )
        }
    }
    render(){
        return (
            <Card style = {styles.containerStyle}>
                <CardSection>
                    {this.renderMessage()}
                </CardSection>
                <CardSection>
                    <Button
                        style={this.props.roundTrip
                            ? styles.toggledStyle
                            : styles.unToggledStyle} 
                        label='Yes'
                        onPress={this.toggleRoundtrip.bind(this)}
                    />
                    <Button
                        style={!this.props.roundTrip
                            ? styles.toggledStyle
                            : styles.unToggledStyle} 
                        label='No'
                        onPress={this.unToggleRoundtrip.bind(this)}
                    />
                </CardSection>

            </Card>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },
    toggledStyle:{
        backgroundColor: '#1D394B'
    },
    unToggledStyle:{
        backgroundColor: '#2F5167',
    }
}

const mapStateToProps= ({getStartedFlow, findRideForm}) =>{
    const { findOrShare } = getStartedFlow
    const { roundTrip } = findRideForm
    return {
        findOrShare,
        roundTrip
    }

}
export default connect(mapStateToProps, {roundtripUpdated})(RoundtripForm)