import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card, Button} from '../common';
import  DatePickerForm  from '../findRide/DatePickerForm'
import  RoundtripForm  from '../findRide/RoundtripForm'
import { connect } from 'react-redux'
import { updateFlowType, renderShareRideFlow, renderFindRideFlow } from '../../actionCreators'

function RenderByIndex(props){
    console.log("current index " + props.index)
    switch(props.index){
        case 1:
            return  <RoundtripForm/>
        case 2:
            return  <DatePickerForm/>
        default:
            return null
    }
}

class LandingGetStarted extends Component {
    constructor(){
        super()
        this.state = {
            index: 0
        }
        this.renderOptions = this.renderOptions.bind(this)
        this.renderFindOrShare = this.renderFindOrShare.bind(this)
        this.incrementIndex = this.incrementIndex.bind(this)
        this.decrementIndex = this.decrementIndex.bind(this)

    }

    onNextPress(event, state){
        const { findOrShare, roundTrip  } = this.props
        this.props.updateFlowType({ findOrShare })
        this.incrementIndex()
        console.log("roundtrip " + roundTrip)
    }

    onBackPress(event, state){
        const { findOrShare } = this.props
        if ( this.state.index == 1){
            this.props.updateFlowType(0)
        }
        else{
            this.props.updateFlowType({findOrShare})
        }
        this.decrementIndex()
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
    shareFlow(){
        this.props.renderShareRideFlow()
        this.incrementIndex()
    }

    findFlow(){
        this.props.renderFindRideFlow()
        this.incrementIndex()
    }

    renderFindOrShare(){
        if (this.state.index == 0){
            return (
                <Card style={styles.containerStyle}>
                    <CardSection>
                        <Button
                            label='Share A Ride'
                            onPress={this.shareFlow.bind(this)}
                        />
    
                        <Button
                            label='Find A Ride'
                            onPress={this.findFlow.bind(this)}
                        />
                    </CardSection>
                </Card>
            )
        }
    }
    renderOptions(){
       
        if (this.state.index > 0){
            return (
                <CardSection style={styles.optionsContainerStyle}>
                    <Button
                        label='Next'
                        onPress={this.onNextPress.bind(this)}
                    />
                    <Button
                        label='Back'
                        onPress={this.onBackPress.bind(this)}
                    />
                </CardSection>
            )
           
        }
    }

    
    render(){
        return(
            <Card style={styles.getStartedContainerStyle}>
                <CardSection style={styles.componentContainerStyle}>
                    {this.renderFindOrShare()}
                    <RenderByIndex
                        index = {this.state.index}
                    />
                    
                </CardSection>
                {this.renderOptions()}
                
            </Card>
        )
    }
}
const styles = {
    getStartedContainerStyle:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    optionsContainerStyle:{
        flex:1,
        justifyContent: 'flex-end',
    },
    componentContainerStyle:{
        height:'70%'
    }
}
const mapStateToProps = (state) => {
    const { findOrShare } = state.getStartedFlow
    const { roundTrip } = state.findRideForm
    return { findOrShare, roundTrip }
}
  
export default connect(mapStateToProps,{
    updateFlowType,
    renderShareRideFlow,
    renderFindRideFlow
})(LandingGetStarted)