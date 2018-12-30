import React from 'react'
import { Text } from 'react-native'
import { 
    Card,
    Input,
    CardSection,
    Button,
    Spinner
} from '../common'
import { connect } from 'react-redux'; 
import { emailChanged, passwordChanged, signInUser } from '../../actionCreators'
/**
 *  Landing Screen Log In
 */
class LandingLogIn extends React.Component {
    onEmailChange(text){
        console.log(text)
        this.props.emailChanged(text)
    }
    onPasswordChange(text){
        console.log(text)
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const { email, password } = this.props
        this.props.signInUser({email,password})
    }

    renderButton(){
        if (this.props.loading){
            return <Spinner/>
        }
        return (
            <Button
                label='Log In'
                onPress={this.onButtonPress.bind(this)}
            />
        )
    }

    render(){
        return(
            <Card style={styles.containerStyle}>
                <CardSection style={styles.facebookContainerStyle}>
                    <Button
                        label='facebook log in'
                    />
                </CardSection>
                <CardSection style={styles.dividerContainerStyle}>
                    <Text>
                    OR
                    </Text>
                </CardSection>
                    

                <CardSection style={styles.loginContainerStyle}>
                    <Input
                        label='Email'
                        placeholder='YourName@school.edu'
                        onChangeText={this.onEmailChange.bind(this)}
                       
                    />
                    <Input
                        label='Password'
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                    <CardSection style={styles.buttonStyle}>
                        {
                            this.renderButton()
                        }
                </CardSection>
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
    facebookContainerStyle: {
        flex: 1,
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    dividerContainerStyle: {
        flex: .5,
        alignItems: 'center'
    },
    loginContainerStyle:{
        flex:3,
        justifyContent:'flex-start',   
    }

}
const mapStateToProps=({ session }) =>{
    const { email , password, error, loading } = session
    return { email , password, error, loading }

}
export default connect(mapStateToProps, {
    emailChanged, passwordChanged, signInUser
})(LandingLogIn)