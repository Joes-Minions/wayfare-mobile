import React from 'react'
import { Text } from 'react-native'
import { 
    Card,
    Input,
    CardSection,
    Button
} from './common'
/**
 *  Scene for ride finding
 */
class FindRide extends React.Component {
    render(){
        return(
            <Card style={styles.containerStyle}>
                <Text>
                yo
                </Text>

            </Card>
        )
    }
}
const styles = {
    containerStyle: {
        flex: .8,
        flexDirection: 'column',
        justifyContent:'center',        
    }
  }

export default FindRide