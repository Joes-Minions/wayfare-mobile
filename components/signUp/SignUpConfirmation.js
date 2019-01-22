import React from 'react'
import { Text } from 'react-native'
import { 
    Card,
    Input,
    CardSection,
    Button
} from '../common'
import { Actions } from 'react-native-router-flux';
/**
 *  Landing email signup
 */
class SignUpConfirmation extends React.Component {
    render(){
        return(
            <Card  style={styles.containerStyle}>
                <CardSection style={styles.formStyle}>
                    <Text>
                        Confirmation
                    </Text>
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    containerStyle: {
        flex: 2,
        flexDirection: 'column',
        justifyContent:'flex-start',        
    },
    formStyle:{
        flexDirection: 'column',
        justifyContent:'flex-start',  
    }
  }

export default SignUpConfirmation