import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card, Button} from '../common';
import { Actions } from 'react-native-router-flux';

function RenderByIndex(props){
    if (props.index == 1){
        return <Text>asfasfds</Text>
    }
    else{
        return null
    }
}

class LandingGetStarted extends Component {
    constructor(){
        super()
        this.state = {
            index: 0,
            findOrShare: 0
        }
        this.renderOptions = this.renderOptions.bind(this)
        this.shareFlow = this.shareFlow.bind(this)
        this.findFlow = this.findFlow.bind(this)
        this.incrementIndex = this.incrementIndex.bind(this)
        this.decrementIndex = this.decrementIndex.bind(this)

    }
    
    shareFlow(){
        this.setState({findOrShare: 1, index: 1})

    }
    findFlow(){
        this.setState({findOrShare: 2, index: 1})
    }

    decrementIndex(state){
        this.setState((state)=>({
            index: state.index - 1
        }))
    }

    incrementIndex(state){
        this.setState((state)=>({
            index: state.index + 1
        }))
    }

    renderOptions(){
        const { index }  = this.state
        if (index == 0){
            return (
                <Card>
                    <CardSection>
                        <Button
                            label='Share A Ride'
                            onPress={this.shareFlow.bind(this)}
                        />

                    </CardSection>
                    <CardSection>
                        <Button
                            label='Find A Ride'
                            onPress={this.findFlow.bind(this)}
                        />
                    </CardSection>
                </Card>
            )
        }
        else {
            return (
                <CardSection>
                <Button
                    label='Next'
                    onPress={this.incrementIndex.bind(this)}
                />
                <Button
                    label='Back'
                    onPress={this.decrementIndex.bind(this)}
                />
        </CardSection>
            )
           
        }
    }
    render(){
        return(
            <Card>
                <RenderByIndex
                    index = {this.state.index}
                />
                {this.renderOptions()}
            </Card>
        )
    }
}
export default LandingGetStarted;