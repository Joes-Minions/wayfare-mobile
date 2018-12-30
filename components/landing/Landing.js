import React from 'react'
import { Text } from 'react-native'
import { 
    Card,
    CardSection,
    Button
} from '../common'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


/**
 *  Landing Screen
 */
class Landing extends React.Component {
    
    render(){
        return(
            <Card style={styles.cardStyle}>
                <CardSection style={styles.LogoContainerStyle}>

                </CardSection>
                <CardSection style={styles.LogInContainerStyle}>
                    <Button
                        label="Sign In or Sign Up"
                        onPress={()=>Actions.landingAuth()}
                    />
                </CardSection>
                <CardSection style={styles.SignUpContainerStyle}>
                    <Button
                        label="Get Started"
                        onPress={()=>Actions.findRide()}
                    />
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    LogoContainerStyle:{
        flex:1
    },
    LogInContainerStyle: {
        flex:.5,
        flexDirection: 'column',        
    },
    cardStyle:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    SignUpContainerStyle:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    }

  }

export default Landing