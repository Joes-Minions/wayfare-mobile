import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { CardSection, Card} from '../common';
import { Actions } from 'react-native-router-flux';
import FindOrShare from './LandingFindOrShare'

function RenderByIndex(props){
    switch(props.index){
        case 0:
            return <FindOrShare/>
        default:
            return <FindOrShare/>
    }
}

class LandingGetStarted extends Component {
    constructor(){
        super()
        this.state = {
            index: 0
        }
    }
    render(){
        return(
            <Card>
                <RenderByIndex

                />
                
            </Card>
        )
    }
}
export default LandingGetStarted;