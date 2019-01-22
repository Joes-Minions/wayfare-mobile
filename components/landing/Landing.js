import React from 'react'
import { Text, ImageBackground } from 'react-native'
import { 
    Card,
    CardSection,
    Button,
    LogoBanner
} from '../common'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


/**
 *  Landing Screen
 */
class Landing extends React.Component {
    
    render(){
        return(
            <ImageBackground 
                style={styles.cardStyle}
                source={require('../img/test_hero.jpg')}
            >
                <CardSection style={styles.logoContainerStyle}>
                    
                </CardSection>
                <CardSection style={styles.menuContainerStyle}>
                    <Button
                        label="Sign In or Sign Up"
                        onPress={()=>Actions.landingAuth()}
                        style={styles.buttonStyle}
                        
                    />
                    <Button
                        label="Get Started"
                        onPress={()=>Actions.findRide()}
                        style={styles.buttonStyle}
                    />
                </CardSection>
            </ImageBackground>
        )
    }
}
const styles = {
    logoContainerStyle:{
        flex: 1,
        justifyContent: 'center'
    },
    menuContainerStyle: {
        flex:.5,
        flexDirection: 'column',        
    },
    cardStyle:{
        flex: 1,
        width: '100%',
        height:'100%'
        
    },
    buttonStyle:{
        backgroundColor:'#1D394B',
    }

  }

export default Landing