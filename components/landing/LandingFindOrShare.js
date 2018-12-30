import React from 'react'
import { View, Text } from 'react-native'
import { 
    Card,
    Button,
    CardSection
} from '../common'
/**
 *  Dashboard
 */
class FindOrShare extends React.Component {
    render(){
        return(
            <Card>
                <CardSection>
                    <Button
                        label='Share A Ride'
                    />

                </CardSection>
                <CardSection>
                    <Button
                        label='Find A Ride'
                    />
                </CardSection>
            </Card>
        )
    }
}
export default FindOrShare